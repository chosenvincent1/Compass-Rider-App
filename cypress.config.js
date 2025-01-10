const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 1080,
  // viewportWidth: 1920,
  // video: true,
  e2e: {
    baseUrl:'http://localhost:3000',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {},
		viewportHeight: 768,
		viewportWidth: 1024,
		video: true,
		experimentalSessionAndOrigin: false,
		experimentalWebKitSupport: true
  },
});
