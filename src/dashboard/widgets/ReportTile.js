function ReportTile(props = {}) {
  return {
    type: "ReportTile",
    title: props.title || "Report"
  };
}

module.exports = ReportTile;
