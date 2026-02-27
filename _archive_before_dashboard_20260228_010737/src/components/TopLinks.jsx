export default function TopLinks(){
  const links = [
    { label:"Admin", href:"https://admin.ipharmegy.com" },
    { label:"POS", href:"https://pos.ipharmegy.com" },
    { label:"Inventory", href:"https://inventory.ipharmegy.com" },
    { label:"Academy", href:"https://academy.ipharmegy.com" },
    { label:"Cloud", href:"https://cloud.ipharmegy.com" },
  ];
  return (
    <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
      {links.map(x=>(
        <a key={x.label} href={x.href} style={{
          padding:"8px 12px",
          borderRadius:999,
          border:"1px solid rgba(15,23,42,.10)",
          background:"rgba(255,255,255,.7)",
          textDecoration:"none",
          color:"rgba(15,23,42,.85)",
          fontWeight:800,
          fontSize:13
        }}>
          {x.label}
        </a>
      ))}
    </div>
  );
}
