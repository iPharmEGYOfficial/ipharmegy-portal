export default function PortalLanding() {
  const apps = [
    { key: "admin",     name: "Admin",     url: "https://admin.ipharmegy.com",     color: "rgba(60,130,255,.35)" },
    { key: "pos",       name: "POS",       url: "https://pos.ipharmegy.com",       color: "rgba(255,140,40,.35)" },
    { key: "inventory", name: "Inventory", url: "https://inventory.ipharmegy.com", color: "rgba(40,220,140,.35)" },
    { key: "academy",   name: "Academy",   url: "https://academy.ipharmegy.com",   color: "rgba(175,90,255,.35)" },
    { key: "cloud",     name: "Cloud",     url: "https://cloud.ipharmegy.com",     color: "rgba(40,210,220,.35)" },
  ];

  const go = (url) => {
    // soft redirect (works for mouse + touch)
    window.location.href = url;
  };

  return (
    <div className="landingRadial">
      <div className="radialStage" aria-label="iPharmEG Apps Ring">
        {apps.map((a, i) => (
          <a
            key={a.key}
            className={"orb orb--" + a.key + " orb--i" + i}
            href={a.url}
            aria-label={a.name}
            style={{ "--orbTint": a.color }}
            onPointerDown={(e) => { e.preventDefault(); go(a.url); }}
            onClick={(e) => e.preventDefault()}
          >
            <span className="orbInner">
              <span className="orbName">{a.name}</span>
            </span>
          </a>
        ))}

        <div className="ringCenterWrap">
          <a
            className="ringCenterBtn"
            href="https://ipharmegy.com"
            aria-label="Open iPharmEG"
            onPointerDown={(e) => { e.preventDefault(); go("https://ipharmegy.com"); }}
            onClick={(e) => e.preventDefault()}
          >
            iPharmEG
          </a>
        </div>
      </div>
    </div>
  );
}
