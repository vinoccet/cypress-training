const { defineConfig } = require("cypress");

// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require("wick-a11y/accessibility-tasks");

module.exports = defineConfig({
  
  env: {
    enableAccessibilityVoice: true,
    genrateReport:true
},
accessibilityFolder: 'cypress/mar',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addAccessibilityTasks(on);
      config.specPattern = [
        'cypress/e2e/**/*.spec.js','cypress/e2e/test-automation/tests/*.feature'
      ]
      return config;
    },
  },
});