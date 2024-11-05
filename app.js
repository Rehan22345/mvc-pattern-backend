require("dotenv").config()
const express = require("express");
const app = express();
const connect = require("./db/connect")
connect();
const model = require("./model/user")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
res.send("Hello, World!");
});




app.listen(process.env.PORT);