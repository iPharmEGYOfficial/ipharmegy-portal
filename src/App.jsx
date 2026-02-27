import "./App.css";

const tiles = [
  { title: "Admin",      desc: "Identity  RBAC  Policies  Audit",   href: "https://admin.ipharmegy.com",     tag: "BRAIN" },
  { title: "Inventory",  desc: "Stock  Expiry  Batches  Warehouses", href: "https://inventory.ipharmegy.com", tag: "MEMORY" },
  { title: "POS",        desc: "Sales  Invoices  Customers",          href: "https://pos.ipharmegy.com",       tag: "PULSE" },
  { title: "Cloud",      desc: "Sync  CDN  Deployments",              href: "https://cloud.ipharmegy.com",     tag: "NETWORK" },
  { title: "Academy",    desc: "Training  SOP  Knowledge",            href: "https://academy.ipharmegy.com",   tag: "SKILLS" },
  { title: "AlNour",     desc: "Customer Space",                        href: "https://alnour.ipharmegy.com",    tag: "CLIENT" },
];

function Card({ t }) {
  return (
    <a className="tile" href={t.href} target="_blank" rel="noreferrer">
      <div className="tileTop">
        <div className="tileTitle">{t.title}</div>
        <div className="tileTag">{t.tag}</div>
      </div>
      <div className="tileDesc">{t.desc}</div>
      <div className="tileGo">Open </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brandMark">iPharmEGY</div>
          <div className="brandSub">PORTAL  Control Center</div>
        </div>

        <div className="topActions">
          <a className="link" href="https://ipharmegy.com" target="_blank" rel="noreferrer">Landing</a>
          <a className="link" href="https://portal.ipharmegy.com">Refresh</a>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <div className="heroTitle">System Dashboard</div>
          <div className="heroText">
            One sovereign system. Six vertices. This is the operational cockpit  not the landing page.
          </div>
        </section>

        <section className="grid">
          {tiles.map((t) => <Card key={t.title} t={t} />)}
        </section>

        <section className="status">
          <div className="statusBox">
            <div className="statusTitle">Quick Status</div>
            <div className="statusRow"><span className="dot ok" /> DNS / Domains</div>
            <div className="statusRow"><span className="dot ok" /> Cloudflare Pages</div>
            <div className="statusRow"><span className="dot ok" /> SSL (Edge)</div>
            <div className="statusHint">Tip: later we can wire real health checks + notifications.</div>
          </div>

          <div className="statusBox">
            <div className="statusTitle">Operations</div>
            <div className="ops">
              <a className="btn" href="https://dash.cloudflare.com/" target="_blank" rel="noreferrer">Cloudflare</a>
              <a className="btn" href="https://github.com/iPharmEGYOfficial" target="_blank" rel="noreferrer">GitHub Org</a>
              <a className="btn" href="https://portal.ipharmegy.com">Portal</a>
            </div>
            <div className="statusHint">Portal design stays dashboard-only. Landing stays in ipharmegy-home.</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>iPharmEGY  Edition 2026</div>
        <div className="muted">Portal = dashboard / Home = landing</div>
      </footer>
    </div>
  );
}
