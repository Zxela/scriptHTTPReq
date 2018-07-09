var getHTML = require('./http-func');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};
function printReverse (html) {
    var splitHTML = html.split("");
    var reverseHTML = splitHTML.reverse();
    var joinHTML = reverseHTML.join("")
    console.log(joinHTML)
    }
// function printReverse (html) {
//     console.log(html.toLowerCase());
// };
getHTML(requestOptions, printReverse);

