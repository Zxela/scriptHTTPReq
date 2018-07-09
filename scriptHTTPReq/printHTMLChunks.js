var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function (response) {
    // set encoding to utf-8
    response.setEncoding('utf-8');
    //cb invoken when chunk recieved
    response.on('data', function (data) {
      console.log('Chunk Recieved:', data, '\n');
    });
    //cb invoked on chunk end
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })
}
console.log(getAndPrintHTMLChunks())