function QuickAction(props = {}) {
  return {
    type: "QuickAction",
    label: props.label || "Action",
    target: props.target || "#"
  };
}

module.exports = QuickAction;
