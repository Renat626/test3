const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const userRouter = require("./routes/user_routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use("/", urlencodedParser, userRouter);

app.listen(3000, () => {
    console.log(`Порт ${PORT}`);
});

module.exports = app;