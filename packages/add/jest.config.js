const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  }
};
