var getHTML = require('./http-func');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};
function printUpperCase (html) {
        console.log(html.toUpperCase());
    }
// function printUpperCase (html) {
//     console.log(html.toLowerCase());
// };
getHTML(requestOptions, printUpperCase);

