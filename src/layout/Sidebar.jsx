import "./layout.css";
import { MODULES } from "../config/modules";
import { canAccessModule } from "../config/enterpriseRules";

export default function Sidebar({ role, appMode }) {
  const visible = appMode === "portal"
    ? MODULES.filter(m => role === "admin" || role === "viewer" || canAccessModule(role, m.key))
    : MODULES.filter(m => m.key === appMode);

  return (
    <div className="sidebar">
      <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
        <div style={{
          width:38,height:38,borderRadius:12,display:"grid",placeItems:"center",
          background:"rgba(255,255,255,.15)",fontWeight:900
        }}>iP</div>
        <div>
          <div style={{fontWeight:950, lineHeight:1}}>iPharmEGY</div>
          <div style={{opacity:.75, fontSize:12, marginTop:2}}>
            {appMode.toUpperCase()}  Role: {role}
          </div>
        </div>
      </div>

      <div style={{margin:"10px 0 14px", opacity:.8, fontSize:12}}>Modules</div>

      {appMode !== "portal" && (
        <a className="menuLink" href="https://portal.ipharmegy.com"> Portal</a>
      )}

      {visible.map(m => (
        <a key={m.key} className="menuLink" href={m.href}>
          <span style={{fontWeight:900}}>{m.title}</span>
          <span style={{opacity:.7, fontSize:11}}>  {m.badge}</span>
        </a>
      ))}

      <div style={{marginTop:16, fontSize:12, opacity:.75}}>
        {new Date().getFullYear()} iPharmEGY Unified Platform
      </div>
    </div>
  );
}
