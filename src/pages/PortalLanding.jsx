export default function PortalLanding() {

  const apps = [
    { key:"inventory", name:"Inventory", url:"https://inventory.ipharmegy.com" },
    { key:"pos",       name:"POS",       url:"https://pos.ipharmegy.com" },
    { key:"portal",    name:"Portal",    url:"https://portal.ipharmegy.com" },
    { key:"academy",   name:"Academy",   url:"https://academy.ipharmegy.com" },
    { key:"cloud",     name:"Cloud",     url:"https://cloud.ipharmegy.com" },
    { key:"alnour",    name:"AlNour",    url:"https://alnour.ipharmegy.com" }
  ];

  const total = apps.length;
  const radius = 210;

  return (
    <div className="homeSplit">

      {/* LEFT: 3D Ring */}
      <section className="homeLeft">
        <div className="ringWrap">
          <div className="ringRotator">
            <div className="radialStage">

              {apps.map((app, i) => {
                const angle = (360 / total) * i;
                return (
                  <div
                    key={app.key}
                    className="orbPosition"
                    style={{ transform: `rotate(${angle}deg) translate(${radius}px)` }}
                  >
                    <a
                      href={app.url}
                      className="orb3D"
                      style={{ transform: `rotate(-${angle}deg)` }}
                      title={app.name}
                    >
                      <span className="orb3DText">{app.name}</span>
                    </a>
                  </div>
                );
              })}

              <div className="ringCenterBadge" title="iPharmEGY HEXA">
                <div className="ringCenterTitle">iPharmEGY</div>
                <div className="ringCenterSub">HEXA SYSTEM</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* RIGHT: Signature + Logo image */}
      <section className="homeRight">
        <div className="signatureCard">
          <img
            className="signatureImg"
            src="/assets/ring/signatureMark.png"
            alt="Haitham Osama Abdelghaffar Signature"
          />
        </div>
      </section>

    </div>
  );
}
