function SecurityTile(props = {}) {
  return {
    type: "SecurityTile",
    title: props.title || "Security"
  };
}

module.exports = SecurityTile;
