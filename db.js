const Pool = require("pg").Pool;

const pool = new Pool({
    user: "whack",
    password: "dev",
    host: "localhost",
    port: 5432,
    database: "whack"
})

module.exports = pool;