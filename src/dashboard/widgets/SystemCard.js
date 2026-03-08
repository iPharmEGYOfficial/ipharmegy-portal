function SystemCard(props = {}) {
  return {
    type: "SystemCard",
    title: props.title || "System Card",
    value: props.value || ""
  };
}

module.exports = SystemCard;
