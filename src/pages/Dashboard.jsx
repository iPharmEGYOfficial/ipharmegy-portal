import { useEffect, useMemo, useState } from "react";

function statusClass(s){
  if (s === "online") return "s-online";
  if (s === "degraded") return "s-degraded";
  return "s-offline";
}

export default function Dashboard(){
  const [data, setData] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch("/data/live.json")
      .then(r => r.json())
      .then(j => setData(j))
      .catch(() => setData({ system:{uptimePct:"",latencyMs:"",errorRatePct:""}, services:[] }));
  }, []);

  const sys = data?.system || { uptimePct:"", latencyMs:"", errorRatePct:"" };
  const services = useMemo(() => data?.services || [], [data]);

  return (
    <div className="content">

      <div className="healthRow">
        <div className="card">
          <div className="cardHead">
            <div>
              <div className="cardTitle">System Uptime</div>
              <div className="cardMeta">Last 30 days</div>
            </div>
          </div>
          <div className="kpis">
            <div className="kpi">
              <div className="kpiLabel">Uptime %</div>
              <div className="kpiValue">{sys.uptimePct}</div>
            </div>
            <div className="kpi">
              <div className="kpiLabel">Error Rate %</div>
              <div className="kpiValue">{sys.errorRatePct}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead">
            <div>
              <div className="cardTitle">Gateway Latency</div>
              <div className="cardMeta">Cloudflare edge  origin</div>
            </div>
          </div>
          <div className="kpis">
            <div className="kpi">
              <div className="kpiLabel">Latency (ms)</div>
              <div className="kpiValue">{sys.latencyMs}</div>
            </div>
            <div className="kpi">
              <div className="kpiLabel">Time</div>
              <div className="kpiValue">{now.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardHead">
            <div>
              <div className="cardTitle">Admin Quick Actions</div>
              <div className="cardMeta">Control shortcuts</div>
            </div>
          </div>
          <div className="actions">
            <a className="btn btnPrimary" href="https://admin.ipharmegy.com" target="_blank" rel="noreferrer">Open Admin</a>
            <a className="btn" href="https://cloud.ipharmegy.com" target="_blank" rel="noreferrer">Cloud</a>
          </div>
          <div className="cardMeta" style={{marginTop:12}}>
            (Live APIs later)  For now driven by <b>/public/data/live.json</b>.
          </div>
        </div>
      </div>

      <div className="grid">
        {services.map(s => (
          <div key={s.key} className="card">
            <div className="cardHead">
              <div>
                <div className="cardTitle">{s.name}</div>
                <div className="cardMeta">Updated: {s.updated}</div>
              </div>
              <div className={"status " + statusClass(s.status)}>{s.status.toUpperCase()}</div>
            </div>

            <div className="kpis">
              <div className="kpi">
                <div className="kpiLabel">{s.kpi1}</div>
                <div className="kpiValue">{s.kpi1v}</div>
              </div>
              <div className="kpi">
                <div className="kpiLabel">{s.kpi2}</div>
                <div className="kpiValue">{s.kpi2v}</div>
              </div>
            </div>

            <div className="actions">
              <a className="btn btnPrimary" href={s.url} target="_blank" rel="noreferrer">Open</a>
              <a className="btn" href={s.url} target="_blank" rel="noreferrer">Details</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
