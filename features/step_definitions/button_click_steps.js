const expect = require('chai').expect;
const defineSupportCode = require('cucumber').defineSupportCode;
const app2  = require('../support/hooks')
const world = require('../support/world').World;
const AppPage2 =  require('../step_definitions/support/pages/js_training');

defineSupportCode(({Given, When, Then, Before, World}) => {

  Before(() => {
      app3 = new AppPage2();
  });

  /*Given(/^I am on the test site$/,
    () => app3.navigateTo());
    When(/^I click the submit button$/,
        () => app3.clickSubmit());

    Then(/^I should see the div change color$/,
        () => app3.getClickResults((ele) => {
            expect(ele.getAttribute('class')).to.contain('qa-red')
        }))
    */



  Given(/^I am on the test site$/,
      function (callback) {
          app3.navigateTo()
          callback();
      });


  When(/^I click the submit button$/,
      function (callback) {
          app3.clickSubmit()
          callback();
      });

  Then(/^I should see the div change color$/,
    function (callback) {
        app3.getClickResults(ele)
        expect(ele.getAttribute('class')).to.contain('qa-red')
    })


});
