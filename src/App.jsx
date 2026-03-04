import "./App.css";

const modules = [
  { key: "portal",    title: "Portal",    desc: "Control center & launcher",         href: "https://portal.ipharmegy.com",    tag: "CORE" },
  { key: "inventory", title: "Inventory", desc: "Stock  Expiry  Warehouses",       href: "https://inventory.ipharmegy.com", tag: "MEMORY" },
  { key: "pos",       title: "POS",       desc: "Fast counter  Sales  Invoices",   href: "https://pos.ipharmegy.com",       tag: "PULSE" },
  { key: "cloud",     title: "Cloud",     desc: "Access  Sync  Integrations",      href: "https://cloud.ipharmegy.com",     tag: "NETWORK" },
  { key: "academy",   title: "Academy",   desc: "Training  SOP  Knowledge",        href: "https://academy.ipharmegy.com",   tag: "SKILLS" },
  { key: "alnour",    title: "AlNour",    desc: "Customer space",                    href: "https://alnour.ipharmegy.com",    tag: "CLIENT" },
];

function ModuleCard({ m }) {
  return (
    <a className="moduleCard" href={m.href} target="_blank" rel="noreferrer">
      <div className="moduleTop">
        <div className="moduleTitle">{m.title}</div>
        <div className="moduleTag">{m.tag}</div>
      </div>
      <div className="moduleDesc">{m.desc}</div>
      <div className="moduleGo">Open</div>
    </a>
  );
}

export default function App() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sbBrand">
          <div className="sbLogo">iPharmEGY</div>
          <div className="sbSub">PORTAL  Control Center</div>
        </div>

        <nav className="sbNav">
          <a className="sbLink active" href="https://portal.ipharmegy.com">Dashboard</a>
          <a className="sbLink" href="https://ipharmegy.com" target="_blank" rel="noreferrer">Landing (Home)</a>
          <a className="sbLink" href="https://dash.cloudflare.com/" target="_blank" rel="noreferrer">Cloudflare</a>
          <a className="sbLink" href="https://github.com/iPharmEGYOfficial" target="_blank" rel="noreferrer">GitHub Org</a>
        </nav>

        <div className="sbFoot">
          <div className="sbPill">Edition 2026</div>
          <div className="sbHint">Access: Cloudflare Zero Trust</div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topLeft">
            <div className="title">System Dashboard</div>
            <div className="subtitle">Operational cockpit  enterprise launcher  unified security</div>
          </div>

          <div className="topRight">
            <a className="topBtn" href="https://portal.ipharmegy.com">Refresh</a>
            <a className="topBtn ghost" href="https://ipharmegy.com" target="_blank" rel="noreferrer">Home</a>
          </div>
        </header>

        <section className="kpis">
          <div className="kpi">
            <div className="kpiLabel">DNS</div>
            <div className="kpiValue ok">Healthy</div>
            <div className="kpiHint">Zone + records aligned</div>
          </div>
          <div className="kpi">
            <div className="kpiLabel">Pages</div>
            <div className="kpiValue ok">Deployed</div>
            <div className="kpiHint">Auto build from GitHub</div>
          </div>
          <div className="kpi">
            <div className="kpiLabel">Access</div>
            <div className="kpiValue ok">Protected</div>
            <div className="kpiHint">Zero Trust policies active</div>
          </div>
          <div className="kpi">
            <div className="kpiLabel">Security</div>
            <div className="kpiValue warn">Review</div>
            <div className="kpiHint">Tighten policies per app</div>
          </div>
        </section>

        <section className="sectionHead">
          <div className="sectionTitle">Modules</div>
          <div className="sectionHint">Each module opens its subdomain workspace</div>
        </section>

        <section className="modules">
          {modules.map(m => <ModuleCard key={m.key} m={m} />)}
        </section>

        <section className="grid2">
          <div className="panel">
            <div className="panelTitle">Activity</div>
            <div className="panelBody">
              <div className="row">
                <span className="dot ok" /> Latest deploys are live (Pages)
              </div>
              <div className="row">
                <span className="dot ok" /> Custom domains connected
              </div>
              <div className="row">
                <span className="dot warn" /> Next: per-app Access policies (admin@ipharmegy.com)
              </div>
              <div className="row mutedSm">
                Tip: later we can add real-time health checks + incident banner.
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panelTitle">System Status</div>
            <div className="panelBody">
              <div className="statusLine">
                <div className="statusName">DNS / Domains</div>
                <div className="statusBadge ok">OK</div>
              </div>
              <div className="statusLine">
                <div className="statusName">Cloudflare Pages</div>
                <div className="statusBadge ok">OK</div>
              </div>
              <div className="statusLine">
                <div className="statusName">SSL (Edge)</div>
                <div className="statusBadge ok">OK</div>
              </div>
              <div className="statusLine">
                <div className="statusName">Access Policies</div>
                <div className="statusBadge warn">Tuning</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>iPharmEGY   Portal Control Center</div>
          <div className="muted">Home = landing  Portal = operations  Access = security</div>
        </footer>
      </main>
    </div>
  );
}
