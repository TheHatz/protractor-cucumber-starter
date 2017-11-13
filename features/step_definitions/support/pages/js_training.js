const writeScreenShot = require('../modules/write_screenshot.js')

class AppPage {

  constructor(){
    this.submit = element(by.className('qa-button'));
    console.log('PO')
  }


  navigateTo() {
    browser.waitForAngularEnabled(false);
    console.log('getting the url')
    return browser.get('/');
  }

  clickSubmit() {
    console.log('clicking button')
    return this.submit.click();
  }

  getClickResults() {
    browser.takeScreenshot().then(function(png){
        writeScreenShot.writeScreenShot(png, 'yo0000000000.png');
        return element(by.className('qa-main-div'));

      })

  }




}

module.exports = AppPage;
