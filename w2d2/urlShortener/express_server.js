const express = require("express");
const app = express();
const PORT = 8080;

const urlDatabase = {
    "b2xVn2": "http://www.lighthouselabs.ca",
    "9sm5xK": "http://www.google.com",
};

app.get("/", (req, res) => {
    res.end("Hello!");
});
//added response for urls.json
app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
});
//route to add html to response
app.get("/hello", (req, res) => {
    res.end ("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});