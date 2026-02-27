import "./App.css"

const services = [
  { name: "Portal", url: "https://portal.ipharmegy.com" },
  { name: "Inventory", url: "https://inventory.ipharmegy.com" },
  { name: "POS", url: "https://pos.ipharmegy.com" },
  { name: "Academy", url: "https://academy.ipharmegy.com" },
  { name: "AlNour", url: "https://alnour.ipharmegy.com" },
  { name: "Cloud", url: "https://cloud.ipharmegy.com" }
]

export default function App() {
  return (
    <div className="page">
      <div className="left">
        <div className="ring-wrapper">
          <div className="ring">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="node"
                style={{
                  transform: `rotate(${i * 60}deg) translate(260px) rotate(-${i * 60}deg)`
                }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="right">
        <img
          src="/assets/ring/signatureMark.png"
          alt="iPharmEGY"
          className="brand"
        />
      </div>
    </div>
  )
}