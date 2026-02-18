export default function Dashboard(){
  return (
    <div style={{display:"grid", gap:14}}>
      <div style={{background:"rgba(255,255,255,.86)", border:"1px solid rgba(15,23,42,.10)", borderRadius:18, padding:16}}>
        <h2 style={{margin:"0 0 6px"}}>Today</h2>
        <div style={{color:"rgba(15,23,42,.60)"}}>Placeholder dashboard. Next: connect identity + roles + real data.</div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(12,1fr)", gap:14}}>
        {[
          ["Active Modules","4"],
          ["Users (sample)","12"],
          ["Uptime target","99.9%"],
        ].map(([k,v])=>(
          <div key={k} style={{gridColumn:"span 4", background:"rgba(255,255,255,.86)", border:"1px solid rgba(15,23,42,.10)", borderRadius:18, padding:16}}>
            <div style={{fontWeight:900, fontSize:26}}>{v}</div>
            <div style={{color:"rgba(15,23,42,.60)", marginTop:4}}>{k}</div>
          </div>
        ))}
      </div>

      <div style={{background:"rgba(255,255,255,.70)", border:"1px solid rgba(15,23,42,.10)", borderRadius:18, padding:16}}>
        <div style={{fontWeight:950}}>Next steps</div>
        <ul style={{margin:"10px 0 0", color:"rgba(15,23,42,.60)", lineHeight:1.8}}>
          <li>Connect Cloudflare Access identity</li>
          <li>Add roles.json + permissions</li>
          <li>Build modules: Clients, Billing, API, Settings</li>
        </ul>
      </div>
    </div>
  );
}
