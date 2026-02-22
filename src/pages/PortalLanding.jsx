export default function PortalLanding() {
  const apps = [
    { key: "admin",     name: "Admin",     url: "https://admin.ipharmegy.com",     tint: "rgba(80,140,255,.35)" },
    { key: "pos",       name: "POS",       url: "https://pos.ipharmegy.com",       tint: "rgba(255,170,60,.35)" },
    { key: "inventory", name: "Inventory", url: "https://inventory.ipharmegy.com", tint: "rgba(60,220,170,.35)" },
    { key: "academy",   name: "Academy",   url: "https://academy.ipharmegy.com",   tint: "rgba(180,90,255,.38)" },
    { key: "cloud",     name: "Cloud",     url: "https://cloud.ipharmegy.com",     tint: "rgba(60,220,255,.32)" },
  ];

  const go = (url) => { window.location.href = url; };

  return (
    <div className="landingRadial">
      <div className="radialStage" aria-label="iPharmEG Apps Ring">
        {apps.map((a, i) => (
          <a
            key={a.key}
            className={"orb orb--" + a.key + " orb--i" + i}
            href={a.url}
            aria-label={a.name}
            style={{ "--tint": a.tint }}
            onPointerDown={() => go(a.url)}  /*  soft click */
            onClick={(e) => e.preventDefault()} /* يمنع click المكرر */
          >
            <span className="orbInner">
              <span className="orbName">{a.name}</span>
            </span>
          </a>
        ))}

        {/* Center button */}
        <div className="ringCenterWrap">
          <a
            className="ringCenterBtn"
            href="https://ipharmegy.com"
            aria-label="Open iPharmEG"
            title="iPharmEG"
            onPointerDown={() => go("https://ipharmegy.com")}
            onClick={(e) => e.preventDefault()}
          >
            <img className="ringCenterIcon" src="/logos/icon.png" alt="iPharmEG" />
          </a>
        </div>
      </div>
    </div>
  );
}
