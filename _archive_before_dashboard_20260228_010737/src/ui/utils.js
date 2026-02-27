export function initialsFromEmail(email){
  const e = (email || "").trim().toLowerCase();
  if(!e) return "IP";
  const name = e.split("@")[0].replace(/[^a-z0-9]+/g," ").trim();
  const parts = name.split(" ").filter(Boolean);
  const a = (parts[0]?.[0] || "i").toUpperCase();
  const b = (parts[1]?.[0] || parts[0]?.[1] || "p").toUpperCase();
  return (a + b).slice(0,2);
}

export function safeEmail(identity){
  return identity?.email || identity?.Email || "";
}
