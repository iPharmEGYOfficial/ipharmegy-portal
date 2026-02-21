export default function PortalLanding() {
  const apps = [
    { key: "admin",    label: "Open Admin",     url: "https://admin.ipharmegy.com",     wm: "/logos/admin.png" },
    { key: "pos",      label: "Open POS",       url: "https://pos.ipharmegy.com",       wm: "/logos/pos.png"   },
    { key: "inventory",label: "Open Inventory", url: "https://inventory.ipharmegy.com", wm: "/logos/inventory.png"   },
    { key: "academy",  label: "Open Academy",   url: "https://academy.ipharmegy.com",   wm: "/logos/academy.png"   },
    { key: "cloud",    label: "Open Cloud",     url: "https://cloud.ipharmegy.com",     wm: "/logos/cloud.png"   },
  ];

  return (
    <div className="landing">
      <div className="landingGrid">
        {apps.map(a => (
          <div
            key={a.key}
            className={"appCard appCard--" + a.key}
            style={{ ["--wm"]: url(\) }}
          >
            <a className={"openBtn openBtn--" + a.key} href={a.url}>
              {a.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
