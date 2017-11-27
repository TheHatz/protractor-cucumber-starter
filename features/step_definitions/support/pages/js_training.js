const writeScreenShot = require('../modules/write_screenshot.js')

class AppPage {

  constructor(){
    this.submit = element(by.className('qa-button'));
    this.mainBlock = element(by.className('qa-main-div'))
  }


  navigateTo() {
    browser.waitForAngularEnabled(false);
    console.log('getting the url');
    return browser.get('/');
  }

  clickSubmit() {
     return this.submit.click()
  }

  getMainBlockElement(callback) {
    return this.mainBlock
  }

}

module.exports = AppPage;
