exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature'],
  baseUrl: 'http://localhost:8080/',
  ignoreUncaughtExceptions: true,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
        './features/support/**/*hooks.js',
        './features/step_definitions/**/*.js'
    ],
    strict: true,
    format: [
      'json:reports/summary.json'
    ],
    dryRun: false,
    compiler: []
  },

  onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
};
