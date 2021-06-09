const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const userRouter = require("./routes/user_routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs"));

// app.use(express.static(path.join(__dirname, "public")))

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.render("index", {title: "Main page", menu: {
        "/about": "About us",
        "/contact": "Contact"}})
})

app.get("/about", (req, res) => {
    res.render("about", {title: "About us page", menu: {
        "/": "Main page",
        "/contact": "Contact"}})
})

app.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact page", menu: {
        "/": "Main page",
        "/about": "About us"}})
})

app.get("/form", (req, res) => {
    res.render("form")
})

app.use("/", userRouter);

// app.post("/form", urlencodedParser, (req, res) => {
//     if (!req.body) return res.statusCode(400);
//     res.render("formSend", {data: req.body});
// })

app.listen(3000, () => {
    console.log(`Порт ${PORT}`);
});

module.exports = urlencodedParser;