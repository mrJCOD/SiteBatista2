const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm7b5rt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
