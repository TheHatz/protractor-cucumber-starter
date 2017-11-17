const writeScreenShot = require('../modules/write_screenshot.js')

class AppPage {

  constructor(){
    //this.submit = element(by.className('qa-button'));
  }


  navigateTo() {
    browser.waitForAngularEnabled(false);
    console.log('getting the url');
    return browser.get('/');
  }

  clickSubmit() {
       //browser.element(by.partialLinkText('Submit')).click();

//   var b = browser.element(by.className('qa-button'));
//   b.click();

     browser.element(by.className('qa-button')).click();
  }

  getClickResults(callback) {
    let ele = browser.element(by.className('qa-main-div'));
    //console.log(ele);
    /* browser.takeScreenshot().then(function(png){
        writeScreenShot.writeScreenShot(png, 'yo0000000000.png');

      }); */

   /*   element.all(by.className('layout')).then(function(items) {
          console.log('these are the items: ' + items)
      });
    */
    return callback(ele, browser);

  }




}

module.exports = AppPage;
