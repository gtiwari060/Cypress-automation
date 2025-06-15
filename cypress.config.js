const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile))
    {
      console.log("No custom config file found.")
      return {};
    }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: '2hr1g9',
  //reporter: 'cypress-mochawesome-reporter',
  //reporterOptions: {
  //    reportDir: 'cypress/reports',
  //    overwrite: true,
  //    html: true,
  //     charts: true,
  //     reportPageTitle: 'My Test Suite',
  //     embeddedScreenshots: true,
  //     inlineAssets: true,
  //     saveAllAttempts: false,
  //   },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      const file = config.env.configFile || ''  
    //  require('cypress-mochawesome-reporter/plugin')(on); 
  return getConfigurationByFile(file)  
},
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/Ocuityai/*.js",
    experimentalSessionandAndOrigin: "true",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    videoUploadOnPasses: false,
    retries: {
      runMode:0,
      openMode:0
    },
  },
});
