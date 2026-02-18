export default function AccessDenied({ appMode, role, reason }) {
  return (
    <div style={{
      maxWidth: 820, margin: "80px auto", padding: 18,
      background: "rgba(255,255,255,.86)",
      border: "1px solid rgba(15,23,42,.10)",
      borderRadius: 18
    }}>
      <h1 style={{ margin: "0 0 8px" }}>Access Denied</h1>
      <div style={{ color: "rgba(15,23,42,.65)", lineHeight: 1.8 }}>
        <div><b>App:</b> {appMode}</div>
        <div><b>Your role:</b> {role}</div>
        <div><b>Reason:</b> {reason || "Not allowed"}</div>
      </div>
    </div>
  );
}
