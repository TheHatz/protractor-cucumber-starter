const expect = require('chai').expect;
const defineSupportCode = require('cucumber').defineSupportCode;
const app2  = require('../support/hooks')
const world = require('../support/world').World;
var AppPage2 =  require('../step_definitions/support/pages/js_training');

defineSupportCode(({Given, When, Then, Before, World}) => {

    Before(() => {
        app3 = new AppPage2();
    });


    Given(/^I am on the test site$/,
        function (callback) {
            app3.navigateTo().then(callback)
        });


    When(/^I click the submit button$/,
        function (callback) {
            app3.clickSubmit().then(callback)

        });

    Then(/^I should see the div change color$/,
        function(callback) {
            app3.getMainBlockElement().getAttribute('class').then(function (value) {
            console.log('the val is: ' + value);
            expect(value).to.include('qa-blue');
            callback();
                })
            })

});
