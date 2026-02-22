export default function PortalLanding() {
  const apps = [
    { key: "admin",     name: "Admin",     url: "https://admin.ipharmegy.com" },
    { key: "pos",       name: "POS",       url: "https://pos.ipharmegy.com" },
    { key: "inventory", name: "Inventory", url: "https://inventory.ipharmegy.com" },
    { key: "academy",   name: "Academy",   url: "https://academy.ipharmegy.com" },
    { key: "cloud",     name: "Cloud",     url: "https://cloud.ipharmegy.com" },
  ];

  return (
    <div className="landingRadial">
      <div className="radialStage" aria-label="iPharmEG Apps Ring">
        {apps.map((a, i) => (
          <a
            key={a.key}
            className={"orb orb--" + a.key + " orb--i" + i}
            href={a.url}
            onClick={() => window.open(a.url, "_self")}
            aria-label={a.name}
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
            onClick={() => window.open("https://ipharmegy.com", "_self")}
            aria-label="Open iPharmEG"
            title="iPharmEG"
          >
            <img className="ringCenterIcon" src="/logos/icon.png" alt="iPharmEG" />
          </a>
        </div>
      </div>
    </div>
  );
}
