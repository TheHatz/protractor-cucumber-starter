const fs = require('fs')

class AppPage {

  constructor(){
    this.submit = element(by.className('qa-button'));
  }


  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  clickSubmit() {
    return this.submit.click();

  }

  getClickResults() {
    browser.takeScreenshot().then(function(png){
        writeScreenShot(png, 'yo0000000000.png');

        function writeScreenShot(data,filename){
            var stream = fs.createWriteStream(filename);
            console.log('screenshot?');
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        }

        return element(by.className('qa-main-div'));

      })

  }




}

module.exports = AppPage;
