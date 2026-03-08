function StatusTile(props = {}) {
  return {
    type: "StatusTile",
    label: props.label || "Status",
    state: props.state || "unknown"
  };
}

module.exports = StatusTile;
