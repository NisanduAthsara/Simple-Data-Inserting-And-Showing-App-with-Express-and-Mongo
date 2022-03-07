const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const axios = require('axios')

router.get('/',(req,res)=>{
    axios.get(`http://localhost:8080/api/users`)
        .then(userdata=>{
            res.render('index',{title:'Dashboard',data:userdata.data})
        })
        .catch(err =>{
            res.send({message:err})
        })
})

router.get('/add-new',(req,res)=>{
    res.render('add_new',{title:'Add New User'})
})

//API
router.get('/api/users',controller.get)
router.post('/api/add-new',controller.save)

module.exports = router