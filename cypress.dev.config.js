const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // Command timeout overridden for E2E tests
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 10000,
    watchForFileChanges:false,
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor", cucumber());
      on('task', {downloadFile})
      config.specPattern = [
        'cypress/e2e/**/*.spec.js','cypress/e2e/test-automation/tests/*.feature'
      ]
      return config;
    } 
  },
})