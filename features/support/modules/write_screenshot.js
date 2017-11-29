const fs = require('fs')

class WriteScreenshot{

    writeScreenShot(data,filename){
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

}

module.exports = new WriteScreenshot();

