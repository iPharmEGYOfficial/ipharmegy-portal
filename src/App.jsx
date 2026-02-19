import { useEffect } from "react";
import { useAuth } from "./auth/useAuth";
import Layout from "./layout/Layout";
import AccessDenied from "./components/AccessDenied.jsx";
import Skeleton from "./components/Skeleton";
import "./App.css";

import { MODULES, BRAND } from "./config/modules";
import { canSeeCard, canAccessModule, isViewer } from "./config/enterpriseRules";

function ModuleCard({ m, appMode, role }) {
  const b = BRAND[m.key] || BRAND.portal;
  const viewer = isViewer(role);

  const locked = !viewer && !(role === "admin" || canAccessModule(role, m.key));

  return (
    <div className="card" style={{ borderColor: b.soft }}>
      <div className="cardTop">
        <div>
          <div className="cardTitle">{m.title}</div>
          <div className="cardDesc">{m.desc}</div>
        </div>
        <div className="pill" style={{ background: b.soft, color: b.accent, borderColor: b.soft }}>
          {m.badge}
        </div>
      </div>

      <div className="cardRow">
        <div className="mini">
          <div className="miniVal">{m.key.toUpperCase()}</div>
          <div className="miniLbl">Module Key</div>
        </div>
        <div className="mini">
          <div className="miniVal">{role.toUpperCase()}</div>
          <div className="miniLbl">Your Role</div>
        </div>
        <div className="mini">
          <div className="miniVal">{appMode.toUpperCase()}</div>
          <div className="miniLbl">Current App</div>
        </div>
      </div>

      <div className="cardActions">
        <a className="btn" href={m.href} style={{ background: b.accent }}>
          Open {m.title}
        </a>

        <a className="btn ghost" href="https://portal.ipharmegy.com">
          Portal Home
        </a>

        {locked && (
          <span className="hint">
            Restricted: role "{role}" cant manage this module.
          </span>
        )}

        {viewer && (
          <span className="hint">
            Viewer mode: links only (no management).
          </span>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const { loading, appMode, identity, role, allowed, reason } = useAuth();

  if (loading) { return <Layout role={role} identity={identity} appMode={appMode}><Skeleton /></Layout>; }

  if (!allowed) { return <Layout role={role} identity={identity} appMode={appMode}><AccessDenied appMode={appMode} role={role} reason={reason} /></Layout>; }

  const visible = MODULES.filter(m => canSeeCard({ appMode, role, moduleKey: m.key }));

  return (
    <Layout role={role} identity={identity} appMode={appMode}>
      <div className="page">
        <div className="pageHead">
          <div>
            <div className="pageTitle">iPharmEGY {appMode.toUpperCase()}</div>
            <div className="pageSub">
              {identity?.email ? identity.email : "Local fallback"}  Role: <b>{role}</b>
            </div>
          </div>
          <div className="pageNote">
            Enterprise Mode: Portal shows modules  Subdomains focus on one module
          </div>
        </div>

        <div className="grid">
          {visible.map(m => (
            <ModuleCard key={m.key} m={m} appMode={appMode} role={role} />
          ))}
        </div>
      </div>
    </Layout>
  );
}






