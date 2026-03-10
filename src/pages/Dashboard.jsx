import SummaryCard from "../components/SummaryCard.jsx";
import AlertsPanel from "../components/AlertsPanel.jsx";

export default function Dashboard() {
  const summary = {
    sales: "427,378.52",
    profit: "122,378.34",
    expired: "20",
    expiringSoon: "17",
    reorder: "0",
    velocity: "2984 items"
  };

  const expiryAlerts = [
    "20 expired tracked batches",
    "6 batches expiring within 30 days",
    "11 batches expiring within 90 days"
  ];

  const salesIntelligence = [
    "Top selling item by qty: Item 61290",
    "Top profit item: Item 78654",
    "Total sales rows: 12,442"
  ];

  const velocityIntelligence = [
    "3 normal-moving items",
    "2,981 slow-moving items",
    "No fast-moving item above threshold"
  ];

  const systemStatus = [
    "Core Engine active",
    "Inventory Intelligence active",
    "POS Intelligence active",
    "Smart Pharmacy Engine active"
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f6f8fb",
        minHeight: "100vh",
        padding: "24px"
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ marginBottom: "8px", marginTop: 0 }}>
          iPharmEGY Portal Dashboard
        </h1>
        <div style={{ opacity: 0.7 }}>
          Smart Pharmacy Control Center
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "24px"
        }}
      >
        <SummaryCard
          title="Sales"
          value={summary.sales}
          subtitle="Total sales"
        />

        <SummaryCard
          title="Profit"
          value={summary.profit}
          subtitle="Total profit"
        />

        <SummaryCard
          title="Expired Batches"
          value={summary.expired}
          subtitle="Immediate review"
        />

        <SummaryCard
          title="Expiring Soon"
          value={summary.expiringSoon}
          subtitle="30 + 90 day window"
        />

        <SummaryCard
          title="Smart Reorder"
          value={summary.reorder}
          subtitle="Current candidates"
        />

        <SummaryCard
          title="Velocity Scope"
          value={summary.velocity}
          subtitle="180-day intelligence base"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "16px"
        }}
      >
        <AlertsPanel title="Expiry Alerts" items={expiryAlerts} />
        <AlertsPanel title="Sales Intelligence" items={salesIntelligence} />
        <AlertsPanel
          title="Velocity Intelligence"
          items={velocityIntelligence}
        />
        <AlertsPanel title="System Status" items={systemStatus} />
      </div>
    </div>
  );
}
