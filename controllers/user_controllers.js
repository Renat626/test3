

class UserController {
    async createUser(req, res) {
        if (!req.body) return res.statusCode(400);
        res.render("formSend", {data: req.body});
    }
}