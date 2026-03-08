module.exports = {
  shell: require("./dashboard-shell"),
  map: require("./dashboard-map"),
  systemStatus: require("./system-status"),
  moduleLauncher: require("./module-launcher"),
  reportsCenter: require("./reports-center"),
  securityCenter: require("./security-center"),
  routingCenter: require("./routing-center"),
  widgets: {
    SystemCard: require("./widgets/SystemCard"),
    StatusTile: require("./widgets/StatusTile"),
    QuickAction: require("./widgets/QuickAction"),
    ModuleTile: require("./widgets/ModuleTile"),
    ReportTile: require("./widgets/ReportTile"),
    SecurityTile: require("./widgets/SecurityTile")
  },
  pages: {
    HomePage: require("./pages/HomePage"),
    ModulesPage: require("./pages/ModulesPage"),
    ReportsPage: require("./pages/ReportsPage"),
    SecurityPage: require("./pages/SecurityPage"),
    RoutingPage: require("./pages/RoutingPage"),
    StatusPage: require("./pages/StatusPage")
  }
};
