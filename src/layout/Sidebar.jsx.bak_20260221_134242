import "./layout.css";
import { MODULES } from "../config/modules";
import { canAccessModule } from "../config/enterpriseRules";

function isActiveLink(href){
  try {
    const u = new URL(href);
    return window.location.hostname.toLowerCase() === u.hostname.toLowerCase();
  } catch {
    return false;
  }
}

export default function Sidebar({ role, appMode }) {
  const visible = appMode === "portal"
    ? MODULES.filter(m => role === "admin" || role === "viewer" || canAccessModule(role, m.key))
    : MODULES.filter(m => m.key === appMode);

  return (
    <div className="sidebar">
      <div className="brandRow">
        <div className="brandMark">iP</div>
        <div>
          <div className="brandName">iPharmEGY</div>
          <div className="brandMeta">
            <span className="dot ok" /> {appMode.toUpperCase()}
            <span className="sep"></span>
            Role: <b>{role}</b>
          </div>
        </div>
      </div>

      <div className="sectionLabel">Modules</div>

      {appMode !== "portal" && (
        <a className={"menuLink"} href="https://portal.ipharmegy.com">
          <span className="menuTitle">Portal</span>
          <span className="menuBadge">HOME</span>
        </a>
      )}

      {visible.map(m => {
        const active = isActiveLink(m.href);
        return (
          <a key={m.key} className={"menuLink" + (active ? " active" : "")} href={m.href}>
            <span className="menuTitle">{m.title}</span>
            <span className="menuBadge">{m.badge}</span>
          </a>
        );
      })}

      <div className="sideFoot">
        {new Date().getFullYear()} iPharmEGY  Unified Platform
      </div>
    </div>
  );
}
