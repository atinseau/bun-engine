import { type BunPlugin } from "bun";

const compilerPlugin: BunPlugin = {
  name: "Custom loader",
  setup(build) {
    // implementation

    console.log(build)
  },
};

export default compilerPlugin;