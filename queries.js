const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'week8',
    password:'121904',
    port: 5432
})

module.exports = pool