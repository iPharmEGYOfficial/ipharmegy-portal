export function canAccessModule(role, moduleKey) {
  if (role === "admin") return true;
  // role name equals module key: pos/inventory/academy/cloud
  return role === moduleKey;
}

export function canSeeCard({ appMode, role, moduleKey }) {
  // In subdomain: show ONLY its module (Enterprise focus)
  if (appMode !== "portal") return moduleKey === appMode;

  // In portal: admin sees all, module roles see their module, viewer sees all but as "view-only"
  if (role === "admin") return true;
  if (role === "viewer") return true;
  return role === moduleKey;
}

export function isViewer(role){
  return role === "viewer";
}
