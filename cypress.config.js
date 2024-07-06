const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

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
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''
  return getConfigurationByFile(file)

    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/Ocuityai/*.js",
    baseUrl: "https://webdriveruniversity.com",
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
     reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
    env:{
      first_name: "Sarah",
      webdriveruni_url: "https://webdriveruniversity.com"
    }
  },
});
