var {defineSupportCode} = require('cucumber');
const AppPage =  require('../step_definitions/support/pages/js_training');

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
        //app = new AppPage();
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
    After(function () {
        // Assuming this.driver is a selenium webdriver
        //return this.driver.quit();
    });
});

