export default function PortalLanding() {
  const apps = [
    { key: "admin",     name: "Admin",     url: "https://admin.ipharmegy.com",     wm: "/logos/admin.png" },
    { key: "pos",       name: "POS",       url: "https://pos.ipharmegy.com",       wm: "/logos/pos.png" },
    { key: "inventory", name: "Inventory", url: "https://inventory.ipharmegy.com", wm: "/logos/inventory.png" },
    { key: "academy",   name: "Academy",   url: "https://academy.ipharmegy.com",   wm: "/logos/academy.png" },
    { key: "cloud",     name: "Cloud",     url: "https://cloud.ipharmegy.com",     wm: "/logos/cloud.png" },
  ];

  return (
    <div className="landingRadial">
      <div className="radialHeader">
        <div className="radialBrand">
          <img src="/logos/icon.png" alt="iPharmEGY" />
        </div>
        <h1>iPharmEGY Portal</h1>
        <p>Choose an app to continue</p>
      </div>

      <div className="radialStage" aria-label="iPharmEGY Portal Apps">
        {apps.map((a, i) => (
          <a
            key={a.key}
            className={"orb orb--" + a.key + " orb--i" + i}
            href={a.url}
            aria-label={"Open " + a.name}
            style={{ "--wm": `url(${a.wm})` }}
          >
            <span className="orbInner">
              <span className="orbName">{a.name}</span>
              <span className="orbBtn">Open</span>
            </span>
          </a>
        ))}

        <div className="radialCenter" aria-hidden="true">
          <img className="radialLogo" src="/logos/icon.png" alt="" />
          <div className="radialCenterText">
            <div className="radialCenterTitle">iPharmEGY</div>
            <div className="radialCenterSub">Apps Hub</div>
          </div>
        </div>
      </div>
    </div>
  );
}

