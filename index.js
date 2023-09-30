const express = require('express')
const app = express()
const pool = require('./queries.js')
const router = require('./router.js')
app.use(router)


app.get('/', (req, res)=>{
    pool.query('SELECT * FROM actor', (err, result)=>{
        if (err){
            throw err
        }
        res.send(result)
    })
})

pool.connect((err, res)=>{
    console.log(err)
    console.log('database connected')
})

app.listen(3000)