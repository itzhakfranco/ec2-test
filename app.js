const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.get("/TEST", function (req, res) {
	res.send("TEST ENDPOINT");
});

app.listen(8080, () => console.log("running on port 8080"));
