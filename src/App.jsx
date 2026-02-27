import "./App.css";

function HexaRingLeft(){
  const apps = [
    { key:"inventory", name:"Inventory", url:"https://inventory.ipharmegy.com" },
    { key:"pos",       name:"POS",       url:"https://pos.ipharmegy.com" },
    { key:"portal",    name:"Portal",    url:"https://portal.ipharmegy.com" },
    { key:"academy",   name:"Academy",   url:"https://academy.ipharmegy.com" },
    { key:"alnour",    name:"AlNour",    url:"https://alnour.ipharmegy.com" },
    { key:"cloud",     name:"Cloud",     url:"https://cloud.ipharmegy.com" }
  ];

  const total = apps.length;
  const radius = 220;

  return (
    <div className="hexaLeftStage">
      <div className="hexaRotator">
        <div className="hexaStage">

          {/* spectrum ring bridge */}
          <div className="hexaBridge" />

          {apps.map((app, i) => {
            const angle = (360 / total) * i;
            return (
              <div
                key={app.key}
                className="hexaOrbPos"
                style={{ transform: `rotate(${angle}deg) translate(${radius}px)` }}
              >
                <a
                  href={app.url}
                  className="hexaOrb"
                  style={{ transform: `rotate(-${angle}deg)` }}
                  title={app.name}
                >
                  <span className="hexaOrbText">{app.name}</span>
                </a>
              </div>
            );
          })}

          <div className="hexaCenter">
            <div className="hexaCenterTitle">iPharmEGY</div>
            <div className="hexaCenterSub">PORTAL</div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SignatureRight(){
  return (
    <div className="sigRightStage">
      <img
        className="sigImg"
        src="/assets/ring/signatureMark.png"
        alt="Haitham Osama Abdelghaffar"
      />
    </div>
  );
}

export default function App(){
  return (
    <div className="portalSplit">
      <section className="portalLeft">
        <HexaRingLeft />
      </section>

      <section className="portalRight">
        <SignatureRight />
      </section>
    </div>
  );
}
