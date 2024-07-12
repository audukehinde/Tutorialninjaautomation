const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://tutorialsninja.com/demo/',
    // defaultCommandTimeout: 90000,
    pageLoadTimeout: 9000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
