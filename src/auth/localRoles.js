export async function loadLocalRoles() {
  const res = await fetch("/data/roles.json", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Cannot load /data/roles.json");
  }

  return await res.json();
}
