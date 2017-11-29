const expect = require('chai').expect;
const defineSupportCode = require('cucumber').defineSupportCode;
const main_page  = require('../support/hooks');

defineSupportCode(({Given, When, Then}) => {

    Given(/^I am on the test site$/,
        function (callback) {
            main_page.navigateTo().then(callback)
        });


    When(/^I click the submit button$/,
        function (callback) {
            main_page.clickSubmit().then(callback)

        });

    Then(/^I should see the div change color$/,
        function(callback) {
            main_page.getMainBlockElement().getAttribute('class').then(function (value) {
            expect(value).to.include('qa-blue');
            callback();
                })
            })

});
