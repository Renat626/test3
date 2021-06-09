const Router = require("express");
const router = new Router();
const userController = require("../controllers/user_controllers");
const urlencodedParser = require("../index");

router.post("form", urlencodedParser, userController.createUser);

module.exports = router;