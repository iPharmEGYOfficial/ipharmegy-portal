module.exports = {
  services: [
    { key: "portal", status: "online" },
    { key: "inventory", status: "online" },
    { key: "pos", status: "online" },
    { key: "cloud", status: "online" },
    { key: "academy", status: "online" },
    { key: "alnour", status: "online" }
  ],
  infrastructure: {
    sync: "healthy",
    storage: "healthy",
    security: "monitored"
  }
};
