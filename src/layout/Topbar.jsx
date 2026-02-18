import "./layout.css";

export default function Topbar({ role, identity, appMode }) {
  return (
    <div className="topbar">
      <div>
        <strong>{appMode.toUpperCase()}</strong>
      </div>
      <div>
        {identity?.email || "Local User"} | Role: {role}
      </div>
    </div>
  );
}
