const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost/devRadar',{ useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/',(req, res)=>{
    return res.json({message: 'ola'})
})

app.listen(3333)