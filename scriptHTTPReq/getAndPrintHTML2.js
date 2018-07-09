var https = require('https');

function getAndPrintHTML (options) {
 var arr = [];
 https.get(options, function (response) {
   // set encoding to utf-8
  response.setEncoding('utf-8');
   //cb invoken when chunk recieved
  response.on('data', function (data) {
    arr.push(data);
    console.log('chunk added to array');
     // console.log('data = ', data);
     // console.log(arr)
  });
   //cb invoked on chunk end
   response.on('end', function (data) {
    for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
    };
  });
 });
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions)