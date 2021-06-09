const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs")); 
console.log(app.get("view engine"));
console.log(app.get("views"));

// app.use(express.static(path.join(__dirname, "public")))

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

app.get("/test", (req, res, next) => {
    next()
    res.send("test")
})

app.listen(3000, () => {
    console.log(`Порт ${PORT}`);
});