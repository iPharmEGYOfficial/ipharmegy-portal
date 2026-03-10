export default function AlertsPanel({ title, items = [] }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "16px",
        padding: "16px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "12px" }}>{title}</h3>

      {items.length === 0 ? (
        <div style={{ opacity: 0.7 }}>No alerts.</div>
      ) : (
        <ul style={{ paddingLeft: "18px", marginBottom: 0, marginTop: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
