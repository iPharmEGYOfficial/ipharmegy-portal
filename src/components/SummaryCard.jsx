import React from "react";

export default function SummaryCard({ title, value, subtitle }) {
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
      <div style={{ fontSize: "14px", opacity: 0.7 }}>{title}</div>
      <div
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginTop: "8px",
          lineHeight: 1.2
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "6px" }}>
        {subtitle}
      </div>
    </div>
  );
}
