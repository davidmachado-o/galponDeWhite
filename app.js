const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Running on port 3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"))
})

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"))
})