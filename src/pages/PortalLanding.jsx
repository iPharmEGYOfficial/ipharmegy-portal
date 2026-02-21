export default function PortalLanding() {
  const apps = [
    { key: "admin",     label: "Open Admin",     url: "https://admin.ipharmegy.com",     wm: "/logos/admin.png" },
    { key: "pos",       label: "Open POS",       url: "https://pos.ipharmegy.com",       wm: "/logos/pos.png" },
    { key: "inventory", label: "Open Inventory", url: "https://inventory.ipharmegy.com", wm: "/logos/inventory.png" },
    { key: "academy",   label: "Open Academy",   url: "https://academy.ipharmegy.com",   wm: "/logos/academy.png" },
    { key: "cloud",     label: "Open Cloud",     url: "https://cloud.ipharmegy.com",     wm: "/logos/cloud.png" },
  ];

  return (
    <div className="landingRadial">
      <div className="radialStage" aria-label="iPharmEGY Portal Apps">
        {apps.map((a, i) => (
          <a
            key={a.key}
            className={"orb orb--" + a.key + " orb--i" + i}
            href={a.url}
            aria-label={a.label}
            style={{ "--wm": `url(${a.wm})` }}
          >
            <span className="orbBtn">{a.label}</span>
          </a>
        ))}
        <div className="radialCenter" aria-hidden="true"></div>
      </div>
    </div>
  );
}
