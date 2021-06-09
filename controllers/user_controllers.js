const db = require("../db");

class UserController {
    async createUser(req, res) {
        if (!req.body) return res.statusCode(400);
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO "user" (name, surname) VALUES ($1, $2)`, [name, surname])
        console.log(req.body);
        res.render("formSend", {data: req.body});
    }

    async showForm(req, res) {
        res.render("form")
    }
}

module.exports = new UserController();