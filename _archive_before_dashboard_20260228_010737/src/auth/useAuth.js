import { useEffect, useState } from "react";
import { fetchAccessIdentity } from "./identity";
import { loadLocalRoles } from "./localRoles";
import { resolveRole, isAllowed } from "./rbac";

function detectAppMode() {
  const host = window.location.hostname.toLowerCase();

  if (host.startsWith("admin.")) return "admin";
  if (host.startsWith("pos.")) return "pos";
  if (host.startsWith("inventory.")) return "inventory";
  if (host.startsWith("academy.")) return "academy";
  if (host.startsWith("cloud.")) return "cloud";

  return "portal";
}

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [appMode, setAppMode] = useState(detectAppMode());
  const [identity, setIdentity] = useState(null);
  const [role, setRole] = useState("viewer");
  const [allowed, setAllowed] = useState(true);
  const [reason, setReason] = useState("");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const config = await loadLocalRoles();
        const identityData = await fetchAccessIdentity();

        const computedRole = resolveRole(identityData, config);
        const mode = detectAppMode();
        const ok = isAllowed(mode, computedRole, config);

        if (!mounted) return;

        setAppMode(mode);
        setIdentity(identityData);
        setRole(computedRole);
        setAllowed(ok);

        document.body.className = mode;
        document.title = `iPharmEGY - ${mode.toUpperCase()}`;

        if (!ok) {
          setReason(`Access denied for role "${computedRole}" on "${mode}".`);
        }

      } catch {
        if (!mounted) return;
        setAllowed(true);
        setReason("roles.json failed to load.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  return { loading, appMode, identity, role, allowed, reason };
}
