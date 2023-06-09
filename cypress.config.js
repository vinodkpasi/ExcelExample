const { defineConfig } = require("cypress");
const readXlsx = require("./read-xlsx");
const writeXlsx = require("./write-xlsx");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        readXlsx: readXlsx.read,
        writeXlsx:  writeXlsx.write
      });
    },
  },
});
