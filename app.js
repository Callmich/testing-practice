const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.json("Hello World")
});

app.listen(3069, () => {
    console.log("server is now running")
})