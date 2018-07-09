var getHTML = require('./http-func');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};
function printLowerCase (html) {
        console.log(html.toLowerCase());
    }
// function printLowerCase (html) {
//     console.log(html.toLowerCase());
// };
getHTML(requestOptions, printLowerCase);

