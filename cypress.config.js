const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'dje6ia',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: 'screenshots',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress/reports',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});