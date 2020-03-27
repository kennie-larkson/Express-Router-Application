const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This is your new HOME')
})

router.get('/About',(req,res)=>{
    res.send('The About Page')
})


module.exports = router