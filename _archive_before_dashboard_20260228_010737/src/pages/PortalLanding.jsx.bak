export default function PortalLanding() {

  const apps = [
    { key:"admin", name:"Admin", url:"https://admin.ipharmegy.com", icon:"/assets/ring/admin-3d.png" },
    { key:"pos", name:"POS", url:"https://pos.ipharmegy.com", icon:"/assets/ring/pos-3d.png" },
    { key:"inventory", name:"Inventory", url:"https://inventory.ipharmegy.com", icon:"/assets/ring/inventory-3d.png" },
    { key:"academy", name:"Academy", url:"https://academy.ipharmegy.com", icon:"/assets/ring/academy-3d.png" },
    { key:"cloud", name:"Cloud", url:"https://cloud.ipharmegy.com", icon:"/assets/ring/cloud-3d.png" },
    { key:"alnour", name:"AlNour", url:"https://alnour.ipharmegy.com", icon:"/assets/ring/alnour-3d.png" }
  ];

  const total = apps.length;
  const radius = 240;

  return (
    <div className="landingRadial">

      <div className="ringRotator">
        <div className="radialStage">

          {apps.map((app, i) => {
            const angle = (360 / total) * i;

            return (
              <div
                key={app.key}
                className="orbPosition"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px)`
                }}
              >
                <a
                  href={app.url}
                  className="orbContent"
                  style={{ transform: `rotate(-${angle}deg)` }}
                >
                  <img src={app.icon} alt={app.name} />
                  <span className="orbLabel">{app.name}</span>
                </a>
              </div>
            );
          })}

          <div className="ringCenter">
            <img src="/assets/ring/ipharmegy-center-soft.png" alt="iPharmEGY"/>
          </div>

        </div>
      </div>

    </div>
  );
}