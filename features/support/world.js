var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');


var WorldConstructor = function WorldConstructor(callback) {


    var world = {
        browser: browser,                        // this.browser will be available in step definitions
        visit: function(url, callback) {         // this.visit will be available in step definitions
            this.browser.visit(url, callback);
        }
    }
    console.log('world')
    callback(world);

};

module.exports.World = WorldConstructor;
