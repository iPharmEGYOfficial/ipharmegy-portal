function pickEmail(identity) {
  return (identity?.email || "").toLowerCase().trim();
}

function emailDomain(email) {
  const at = email.indexOf("@");
  return at > -1 ? email.slice(at + 1) : "";
}

export function resolveRole(identity, rolesConfig) {
  const email = pickEmail(identity);
  const domain = emailDomain(email);

  if (!email) return "viewer";

  const rules = rolesConfig?.rules || [];

  for (const r of rules) {
    const m = r.match || {};

    if (m.email && m.email.toLowerCase() === email)
      return r.role;

    if (m.emailDomain && m.emailDomain.toLowerCase() === domain)
      return r.role;
  }

  return "viewer";
}

export function isAllowed(appMode, role, rolesConfig) {
  const byApp = rolesConfig?.byApp || {};
  const allowedRoles = byApp[appMode] || byApp["portal"] || [];
  return allowedRoles.includes(role);
}
