const expect = require('chai').expect;
const defineSupportCode = require('cucumber').defineSupportCode;
const AppPage =  require('./support/pages/js_training');

defineSupportCode(({Given, When, Then, Before}) => {

  Before(() => {
    app = new AppPage();
  });

  Given(/^I am on the test site$/,
    () => app.navigateTo());

  When(/^I click the submit button$/,
    () => app.clickSubmit());

  Then(/^I should see the div change color$/,
    () => app.getClickResults((ele) => {
      expect(ele.getAttribute('class')).to.contain('qa-red')
    }))
});