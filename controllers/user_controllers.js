

class UserController {
    async createUser(req, res) {
        if (!req.body) return res.statusCode(400);
        res.render("formSend", {data: req.body});
        console.log(req.body);
    }

    async showForm(req, res) {
        res.render("form")
    }
}

module.exports = new UserController();