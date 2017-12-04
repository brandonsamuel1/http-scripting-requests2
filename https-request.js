var request = require('request');
var fs = require('fs');

console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log(err);
       })
       .on('response', function (response) {
         // console.log('Downloading image...')                        // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Content Type: ', response.headers['content-type']);
         // console.log('Download complete!')
       })
       .on('end', function(){
          console.log('Download complete!');
        })
       .pipe(fs.createWriteStream('./future.jpg'));

