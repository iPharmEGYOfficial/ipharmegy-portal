function ModuleTile(props = {}) {
  return {
    type: "ModuleTile",
    module: props.module || "module",
    url: props.url || "#"
  };
}

module.exports = ModuleTile;
