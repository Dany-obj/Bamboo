const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      allureWriter(on, config);
      await addCucumberPreprocessorPlugin(on, config);

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--lang=en-US');
        }
        if (browser.family === 'firefox') {
          launchOptions.preferences['intl.accept_languages'] = 'en-US';
        }
        return launchOptions;
      });

      return config;
    },
    specPattern:"cypress/e2e/features/*.feature",
    baseUrl: "https://objdep.bamboohr.com/login.php",
    chromeWebSecurity: false,
    defaultCommandTimeout: 2000,
    video: false,
    viewportHeight: 1280,
    viewportWidth: 1440
  },
});