const Pool = require("pg").Pool;

const pool = Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "test_form"
})