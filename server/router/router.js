const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{title:'Dashboard'})
})

router.get('/add-new',(req,res)=>{
    res.render('add_new',{title:'Add New User'})
})

module.exports = router