const express = require('express')
const app = express()

const mongoose = require('mongoose')
const path = require('path')
const router = require('./server/router/router')
require('dotenv/config')

const PORT = process.env.PORT || 3000

//set view engine
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

//set public assets
app.use('/css',express.static(path.join(__dirname,'assets/css')))
app.use('/img',express.static(path.join(__dirname,'assets/img')))

//use routes
app.use(router)

app.get('*',(req,res)=>{
    res.render('error404',{title:'Error 404'})
})

//Connect to the database
mongoose.connect(process.env.MONGO,{useNewUrlParser:true},()=>{
    console.log('Connect to DB');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})