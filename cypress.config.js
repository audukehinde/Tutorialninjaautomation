const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/',
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents,
  },
});
