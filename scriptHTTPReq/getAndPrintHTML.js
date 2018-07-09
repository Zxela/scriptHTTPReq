var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
  };
  var arr = [];
  https.get(requestOptions, function (response) {

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
getAndPrintHTML()