const jsonfile = require('jsonfile');
const express = require('express');
const app = express();

app.get("/users", (req, res) => {
    console.log("fetching all users");
    jsonfile.readFile("./DB/users.json", function(err, content) {
        res.send(content);
    });
});