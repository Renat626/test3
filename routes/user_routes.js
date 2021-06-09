const Router = require("express");
const router = new Router();
const userController = require("../controllers/user_controllers");

router.get("/", (req, res) => {
    res.render("index", {title: "Main page", menu: {
                "/about": "About us",
                "/contact": "Contact"}})
})
router.get("/about", (req, res) => {
    res.render("about", {title: "About us page", menu: {
        "/": "Main page",
        "/contact": "Contact"}})
})
router.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact page", menu: {
        "/": "Main page",
        "/about": "About us"}})
})

router.post("/form", userController.createUser);
router.get("/form", userController.showForm);

module.exports = router;