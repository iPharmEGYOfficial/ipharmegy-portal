export async function fetchAccessIdentity() {
  try {
    const res = await fetch("/cdn-cgi/access/get-identity", {
      credentials: "include"
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data || null;
  } catch {
    return null;
  }
}
