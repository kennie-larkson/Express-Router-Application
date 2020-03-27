const express = require('express');
const router = express.Router();

router.get('/About',(req,res)=>{
    res.send('The About Page')
})

module.exports = router