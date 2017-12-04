const defineSupportCode = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^I have configured my test environment$/,
        function (callback) {
            callback(null, 'passed');
        });

    When(/^I run my test$/, function (callback) {
        callback(null, 'passed');
    });

    Then(/^I output "([^"]*)" to the console$/, function (msg, callback) {
        console.log('Here is the message: ' + msg);
        callback();
    });
});