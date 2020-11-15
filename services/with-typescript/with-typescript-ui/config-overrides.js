const fs = require("fs");
const path = require("path");
const {
  babelInclude,
  override,
  removeModuleScopePlugin,
} = require("customize-cra");

module.exports = override(
  babelInclude([
    path.resolve("src"), // make sure you link your own source
    fs.realpathSync("node_modules/@try-lerna/typescript-package"),
    fs.realpathSync("node_modules/@try-lerna/typescript-react-package"),
  ]),
  removeModuleScopePlugin()
);
