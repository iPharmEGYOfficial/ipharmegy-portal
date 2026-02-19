import { useAuth } from "./auth/useAuth";
import Layout from "./layout/Layout";
import AccessDenied from "./components/AccessDenied";
import "./App.css";

const MODULE_DATA = {
  admin: {
    title: "Administration Center",
    description: "User management, permissions, system control",
    stats: [
      { label: "Active Users", value: "128" },
      { label: "Roles", value: "6" },
      { label: "Audit Logs", value: "2,341" }
    ]
  },
  pos: {
    title: "Point of Sale",
    description: "Sales operations, returns, cashier tracking",
    stats: [
      { label: "Today's Sales", value: "32,540 EGP" },
      { label: "Transactions", value: "184" },
      { label: "Avg Ticket", value: "176 EGP" }
    ]
  },
  inventory: {
    title: "Inventory Control",
    description: "Stock levels, expiry alerts, transfers",
    stats: [
      { label: "Total Items", value: "5,820" },
      { label: "Low Stock", value: "47" },
      { label: "Expiry Alerts", value: "13" }
    ]
  },
  academy: {
    title: "Academy Platform",
    description: "Courses, pharmacists training, certifications",
    stats: [
      { label: "Active Students", value: "612" },
      { label: "Courses", value: "24" },
      { label: "Certificates Issued", value: "1,120" }
    ]
  },
  cloud: {
    title: "Cloud Services",
    description: "SaaS hosting, deployments, system health",
    stats: [
      { label: "Active Clients", value: "38" },
      { label: "Uptime", value: "99.98%" },
      { label: "Servers", value: "7" }
    ]
  }
};

function ModuleCard({ moduleKey }) {
  const data = MODULE_DATA[moduleKey];
  if (!data) return null;

  return (
    <div className={`module-card ${moduleKey}`}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div className="stats">
        {data.stats.map(s => (
          <div key={s.label} className="stat-box">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <button className="primary-btn">
        Open {moduleKey.toUpperCase()}
      </button>
    </div>
  );
}

export default function App() {
  const { loading, appMode, identity, role, allowed, reason } = useAuth();

  if (loading) {
    return <div className="app-container"><h1>Loading...</h1></div>;
  }

  if (!allowed) {
    return <AccessDenied appMode={appMode} role={role} reason={reason} />;
  }

  return (
    <Layout role={role} identity={identity} appMode={appMode}>
      <ModuleCard moduleKey={appMode} />
    </Layout>
  );
}
