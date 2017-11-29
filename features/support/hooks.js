var {defineSupportCode} = require('cucumber');
const AppPage =  require('../step_definitions/support/pages/js_training');
var Cucumber = require('cucumber');
var fs = require('fs');
var conf = require('./world.js').World;
const writeScreenShot = require('../step_definitions/support/modules/write_screenshot.js')


defineSupportCode(function({After, Before}) {
    // Synchronous
   /* Before(function () {
        this.count = 0;
        app = new AppPage();
    });
*/
    // Asynchronous Callback
    Before(function (callback) {
        var world = this;
        console.log('before 1')
        //app = new AppPage();x
        console.log('before 2')
        /*tmp.dir({unsafeCleanup: true}, function(error, dir) {
            if (error) {
                callback(error);
            } else {
                world.tmpDir = dir;
                callback();
            }
        });*/
    });

    // Asynchronous Promise
    After(function(scenario, callback) {
        console.log('scenario', scenario);
        console.log('status', scenario.result.status);
        let result = scenario.result.status

        if (result === 'failed') {
            browser.takeScreenshot().then(function(png) {
                writeScreenShot.writeScreenShot(png, '1234567890.png');
            });
        };

        callback();

    });




});

