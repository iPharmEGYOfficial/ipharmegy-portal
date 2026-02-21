export default function PortalLanding() {
  const apps = [
    { key: "POS",       url: "https://pos.ipharmegy.com",       tint: "rgba(249,115,22,.95)" },
    { key: "Inventory", url: "https://inventory.ipharmegy.com", tint: "rgba(34,197,94,.95)" },
    { key: "Academy",   url: "https://academy.ipharmegy.com",   tint: "rgba(168,85,247,.95)" },
    { key: "Cloud",     url: "https://cloud.ipharmegy.com",     tint: "rgba(20,184,166,.95)" },
  ];

  return (
    <div className="landing">
      <div className="landingHead">
        <div>
          <div className="landingTitle">iPharmEGY</div>
          <div className="landingSub">Unified Platform</div>
        </div>
      </div>

      <div className="landingGrid">
        {apps.map(a => (
          <div className="appCard" key={a.key}>
            <div className="appLogo" style={{ background: a.tint }}>
              <span>{a.key.slice(0,2).toUpperCase()}</span>
            </div>

            <div className="appName">{a.key}</div>

            <a className="appBtn" href={a.url}>
              Open {a.key}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
