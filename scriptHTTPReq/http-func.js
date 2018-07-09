module.exports = function getHTML (options, callback) {
    var https = require('https')
    var newData = "";
    https.get(options, function (response) {
   // set encoding to utf-8
        response.setEncoding('utf-8');
   //cb invoken when chunk recieved
        response.on('data', function (data) {
            newData += data;
    // console.log('data = ', data);
     // console.log(arr)
        });
   //cb invoked on chunk end
        response.on('end', function (data) {
            printHTML(newData);
        });
    });
}
function printHTML (html) {
        console.log(html);
    }

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

