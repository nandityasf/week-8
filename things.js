const express = require('express')
const router = express.Router()

router.get('/:name', function(req, res){
    res.send("hello rakaminnn!!" + req.params.name)
})

router.post('/', function(req, res){
    res.send("hello rakamin from post!!")
})

router.put('/put', function(req, res){
    res.send("hello rakamin from put!!")
})

module.exports = router