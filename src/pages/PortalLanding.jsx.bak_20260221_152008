export default function PortalLanding() {
  const apps = [
    { name: "POS", url: "https://pos.ipharmegy.com", logo: "/logos/pos.svg" },
    { name: "Inventory", url: "https://inventory.ipharmegy.com", logo: "/logos/inventory.svg" },
  ];

  return (
    <div className="landing">
      <div className="landingGrid">
        {apps.map(a => (
          <div className="appCard" key={a.name}>
            <img className="appLogoImg" src={a.logo} alt={a.name} />
            <div className="appName">{a.name}</div>
            <a className="appBtn" href={a.url}>Open {a.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
