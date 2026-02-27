import { BRAND } from "../config/modules";

const COPY = {
  admin: {
    title: "Administration Center",
    subtitle: "Users, Roles, Permissions, Audit & Settings",
    kpis: [
      { label: "Active Users", value: "128" },
      { label: "Roles", value: "6" },
      { label: "Audit Events", value: "2,341" },
      { label: "Security Alerts", value: "0" }
    ],
    actions: [
      { label: "Manage Users", hint: "Create / edit / disable accounts", href: "#" },
      { label: "Roles & Permissions", hint: "RBAC policies and module access", href: "#" },
      { label: "Audit Logs", hint: "Track actions and security events", href: "#" }
    ]
  },
  pos: {
    title: "Point of Sale",
    subtitle: "Sales, Returns, Cashiers & Reports",
    kpis: [
      { label: "Today's Sales", value: "32,540 EGP" },
      { label: "Transactions", value: "184" },
      { label: "Avg Ticket", value: "176 EGP" },
      { label: "Refunds", value: "7" }
    ],
    actions: [
      { label: "New Sale", hint: "Open cashier session", href: "#" },
      { label: "Returns", hint: "Process refunds safely", href: "#" },
      { label: "Daily Report", hint: "Export summary", href: "#" }
    ]
  },
  inventory: {
    title: "Inventory Control",
    subtitle: "Stock, Transfers, Expiry & Counting",
    kpis: [
      { label: "Total Items", value: "5,820" },
      { label: "Low Stock", value: "47" },
      { label: "Expiry Alerts", value: "13" },
      { label: "Transfers Today", value: "9" }
    ],
    actions: [
      { label: "Stock Count", hint: "Start inventory session", href: "#" },
      { label: "Transfers", hint: "Move stock between stores", href: "#" },
      { label: "Expiry Alerts", hint: "Review expiring batches", href: "#" }
    ]
  },
  academy: {
    title: "Academy Platform",
    subtitle: "Courses, Students & Certifications",
    kpis: [
      { label: "Active Students", value: "612" },
      { label: "Courses", value: "24" },
      { label: "Certificates", value: "1,120" },
      { label: "Completion Rate", value: "84%" }
    ],
    actions: [
      { label: "Create Course", hint: "Build new module", href: "#" },
      { label: "Students", hint: "Manage enrollments", href: "#" },
      { label: "Certificates", hint: "Issue & verify", href: "#" }
    ]
  },
  cloud: {
    title: "Cloud Services",
    subtitle: "Clients, Billing, Deployments & Health",
    kpis: [
      { label: "Active Clients", value: "38" },
      { label: "Uptime", value: "99.98%" },
      { label: "Deployments", value: "14" },
      { label: "Incidents", value: "0" }
    ],
    actions: [
      { label: "Deploy", hint: "Publish new build", href: "#" },
      { label: "Clients", hint: "Manage tenants", href: "#" },
      { label: "System Health", hint: "Monitor performance", href: "#" }
    ]
  }
};

function SectionTitle({ title, right }) {
  return (
    <div className="secHead">
      <div className="secTitle">{title}</div>
      {right ? <div className="secRight">{right}</div> : null}
    </div>
  );
}

export default function ModuleDashboard({ appMode, role }) {
  const mode = (appMode || "portal").toLowerCase();
  const cfg = COPY[mode] || COPY.admin;
  const b = BRAND[mode] || BRAND.portal;

  return (
    <div className="dash">
      <div className="hero" style={{ borderColor: b.soft }}>
        <div className="heroLeft">
          <div className="heroKicker">iPharmEGY  {mode.toUpperCase()}</div>
          <div className="heroTitle">{cfg.title}</div>
          <div className="heroSub">{cfg.subtitle}</div>
        </div>

        <div className="heroRight">
          <div className="pill" style={{ background: b.soft, color: b.accent, borderColor: b.soft }}>
            ENTERPRISE
          </div>
          <div className="roleBadge">
            <span className="dot ok" />
            Role: <b style={{ marginLeft: 6 }}>{(role || "viewer").toUpperCase()}</b>
          </div>
          <a className="btn ghost" href="https://portal.ipharmegy.com"> Back to Portal</a>
        </div>
      </div>

      <SectionTitle title="Key Metrics" right={<span className="muted">Live later (API)</span>} />
      <div className="kpiGrid">
        {cfg.kpis.map(k => (
          <div key={k.label} className="kpi" style={{ borderColor: b.soft }}>
            <div className="kpiVal">{k.value}</div>
            <div className="kpiLbl">{k.label}</div>
          </div>
        ))}
      </div>

      <SectionTitle title="Quick Actions" right={<span className="muted">Feature shells</span>} />
      <div className="actionGrid">
        {cfg.actions.map(a => (
          <a key={a.label} className="action" href={a.href} style={{ borderColor: b.soft }}>
            <div className="actionTop">
              <div className="actionTitle">{a.label}</div>
              <div className="actionPill" style={{ background: b.soft, color: b.accent, borderColor: b.soft }}>
                GO
              </div>
            </div>
            <div className="actionHint">{a.hint}</div>
          </a>
        ))}
      </div>

      <SectionTitle title="Recent Activity" right={<span className="muted">Coming soon</span>} />
      <div className="activity" style={{ borderColor: b.soft }}>
        <div className="actRow">
          <div className="actDot" />
          <div className="actTxt">No activity yet. Connect backend events to show logs here.</div>
          <div className="actTime"></div>
        </div>
        <div className="actRow">
          <div className="actDot" />
          <div className="actTxt">This dashboard is the correct SaaS structure for subdomains (no sidebar).</div>
          <div className="actTime">Now</div>
        </div>
      </div>
    </div>
  );
}
