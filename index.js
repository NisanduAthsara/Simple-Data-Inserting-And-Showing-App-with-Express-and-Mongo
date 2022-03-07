const express = require('express')
const app = express()

const path = require('path')
const router = require('./server/router/router')
require('dotenv/config')

const PORT = process.env.PORT || 3000

//set view engine
app.set('view engine','ejs')

//set public assets
app.use('/css',express.static(path.join(__dirname,'assets/css')))
app.use('/img',express.static(path.join(__dirname,'assets/img')))

//use routes
app.use(router)

app.get('*',(req,res)=>{
    res.render('error404',{title:'Error 404'})
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})