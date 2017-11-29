var {defineSupportCode} = require('cucumber');
const AppPage =  require('./pages/main_page');
var Cucumber = require('cucumber');
var fs = require('fs');
//var conf = require('./world.js').World;
const writeScreenShot = require('./modules/write_screenshot.js')


defineSupportCode(function({After, Before}) {
    // Asynchronous Callback
    Before(function (callback) {
        var world = this;
        //app = new AppPage();
    });

    // Asynchronous Promise
    After(function(scenario, callback) {
        let d = Date();
        let dir = 'screenshots/'
        let result = scenario.result.status;
        let name = d + '_' + scenario.pickle.name + '_line_' + scenario.sourceLocation.line;
        //convert non alphanumeric characters
        name = dir +  name.replace(/[^a-zA-Z0-9]/g, '_') + '.png'

        if (result === 'failed') {
          if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
          }
            browser.takeScreenshot().then(function(png) {
                writeScreenShot.writeScreenShot(png, name);
            });
        };

        callback();

    });
});

module.exports = new AppPage();