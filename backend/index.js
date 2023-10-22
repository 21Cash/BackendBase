const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
app.use(cors());


let users = [];

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Welcome From Server").status(200);
});

app.listen(3000, () => {
    console.log("Listening On port 3000");
});