import "./layout.css";
import { initialsFromEmail, safeEmail } from "../ui/utils";

export default function Topbar({ role, identity, appMode }) {
  const email = safeEmail(identity);
  const ini = initialsFromEmail(email);
  const name = identity?.name || identity?.Name || "";

  return (
    <div className="topbar">
      <div className="topLeft">
        <div className="topApp">{appMode.toUpperCase()}</div>
        <div className="topHint">Enterprise SaaS UI</div>
      </div>

      <div className="topRight">
        <div className="chip">
          <span className="dot ok" />
          <span className="chipTxt">Role: <b>{role}</b></span>
        </div>

        <div className="user">
          <div className="avatar" title={email || "Local Fallback"}>
            {ini}
          </div>
          <div className="userMeta">
            <div className="userName">{name || (email ? email.split("@")[0] : "Local User")}</div>
            <div className="userEmail">{email || "Local fallback (no Access identity)"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
