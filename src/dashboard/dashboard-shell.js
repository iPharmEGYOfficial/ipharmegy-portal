function DashboardShell() {
  return {
    type: "DashboardShell",
    name: "iPharmEGY Portal Dashboard",
    module: "portal",
    sections: [
      "Home",
      "Modules Launcher",
      "Reports Center",
      "Security Center",
      "Routing Center",
      "System Status"
    ]
  };
}

module.exports = DashboardShell;
