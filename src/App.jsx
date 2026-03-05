import "./App.css";

const apps = [
  { key: "inventory", name: "Inventory",  desc: "Stock  Expiry  Warehouses", href: "https://inventory.ipharmegy.com", tag: "MEMORY",  tone: "cyan"  },
  { key: "pos",       name: "POS",        desc: "Sales  Invoices  Counter",  href: "https://pos.ipharmegy.com",       tag: "PULSE",   tone: "blue"  },
  { key: "cloud",     name: "Cloud",      desc: "Access  Sync  Storage",     href: "https://cloud.ipharmegy.com",     tag: "NETWORK", tone: "gold"  },
  { key: "academy",   name: "Academy",    desc: "Training  SOP  Knowledge",  href: "https://academy.ipharmegy.com",   tag: "SKILLS",  tone: "violet"},
  { key: "alnour",    name: "AlNour",     desc: "Customer  Offers  Space",   href: "https://alnour.ipharmegy.com",    tag: "CLIENT",  tone: "green" },
];

function Pill({ tone, children }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

function StatusDot({ s }) {
  return <span className={`dot ${s}`} aria-label={s} />;
}

function HexTile({ area, app }) {
  return (
    <a className={`hexTile ${app.tone}`} style={{ gridArea: area }} href={app.href} target="_blank" rel="noreferrer">
      <div className="hexTop">
        <div className="hexName">{app.name}</div>
        <Pill tone={app.tone}>{app.tag}</Pill>
      </div>

      <div className="hexDesc">{app.desc}</div>

      <div className="hexMeta">
        <div className="mini">
          <StatusDot s="ok" /> Access
        </div>
        <div className="mini">
          <StatusDot s="ok" /> Pages
        </div>
        <div className="mini">
          <StatusDot s="warn" /> Policy
        </div>
      </div>

      <div className="hexGo">Open</div>
    </a>
  );
}

export default function App() {
  return (
    <div className="portal">
      <header className="topbar">
        <div className="brand">
          <div className="logo">iPharmEGY</div>
          <div className="sub">PORTAL  HEXAGON CONTROL CENTER</div>
        </div>

        <div className="topActions">
          <a className="btn" href="https://portal.ipharmegy.com">Refresh</a>
          <a className="btn ghost" href="https://ipharmegy.com" target="_blank" rel="noreferrer">Home</a>
          <a className="btn ghost" href="https://dash.cloudflare.com/" target="_blank" rel="noreferrer">Cloudflare</a>
          <a className="btn ghost" href="https://github.com/iPharmEGYOfficial" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <div className="hTitle">System Command Center</div>
          <div className="hDesc">
            One sovereign system. Six vertices. Portal is the operational cockpit  not the landing page.
          </div>

          <div className="kpis">
            <div className="kpi">
              <div className="kLabel">DNS</div>
              <div className="kValue ok">Healthy</div>
              <div className="kHint">Zone + records aligned</div>
            </div>
            <div className="kpi">
              <div className="kLabel">PAGES</div>
              <div className="kValue ok">Deployed</div>
              <div className="kHint">Auto build from GitHub</div>
            </div>
            <div className="kpi">
              <div className="kLabel">ACCESS</div>
              <div className="kValue ok">Protected</div>
              <div className="kHint">Cloudflare Zero Trust</div>
            </div>
            <div className="kpi">
              <div className="kLabel">SECURITY</div>
              <div className="kValue warn">Tuning</div>
              <div className="kHint">Per-app policies (admin@ipharmegy.com)</div>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="hexGrid" aria-label="Hexagon Control Center">
            <HexTile area="tl" app={apps.find(a=>a.key==="academy")} />
            <HexTile area="tr" app={apps.find(a=>a.key==="inventory")} />

            <HexTile area="ml" app={apps.find(a=>a.key==="alnour")} />
            <div className="core" style={{ gridArea: "c" }}>
              <div className="coreRing" />
              <div className="coreInner">
                <div className="coreTitle">PORTAL</div>
                <div className="coreSub">Control  Policies  Ops</div>

                <div className="coreBadges">
                  <span className="badge"><StatusDot s="ok" /> DNS</span>
                  <span className="badge"><StatusDot s="ok" /> Pages</span>
                  <span className="badge"><StatusDot s="ok" /> Access</span>
                </div>

                <div className="coreActions">
                  <a className="coreBtn" href="https://portal.ipharmegy.com">Open Portal</a>
                  <a className="coreBtn ghost" href="https://ipharmegy.com" target="_blank" rel="noreferrer">Landing</a>
                </div>
              </div>
            </div>
            <HexTile area="mr" app={apps.find(a=>a.key==="pos")} />

            <HexTile area="bl" app={apps.find(a=>a.key==="cloud")} />
            <div className="ghostTile" style={{ gridArea: "br" }}>
              <div className="ghostTitle">Reserved</div>
              <div className="ghostDesc">Future vertex / Integrations</div>
            </div>

            <div className="hexLines" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="lower">
        <div className="panel">
          <div className="pTitle">Operations</div>
          <div className="pBody">
            <div className="row"><StatusDot s="ok" /> Latest deploys are live (Pages)</div>
            <div className="row"><StatusDot s="ok" /> Custom domains connected</div>
            <div className="row"><StatusDot s="warn" /> Next: tighten Access per app (admin@ipharmegy.com)</div>
            <div className="tip">Tip: later we can add real health checks + incident banner + notifications.</div>
          </div>
        </div>

        <div className="panel">
          <div className="pTitle">System Status</div>
          <div className="pBody">
            <div className="statLine"><div className="statName">DNS / Domains</div><span className="stat ok">OK</span></div>
            <div className="statLine"><div className="statName">Cloudflare Pages</div><span className="stat ok">OK</span></div>
            <div className="statLine"><div className="statName">SSL (Edge)</div><span className="stat ok">OK</span></div>
            <div className="statLine"><div className="statName">Access Policies</div><span className="stat warn">Tuning</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="fLeft">iPharmEGY  Portal Control Center</div>
        <div className="fRight">Edition 2026  Home = landing  Portal = operations  Access = security</div>
      </footer>
    </div>
  );
}
