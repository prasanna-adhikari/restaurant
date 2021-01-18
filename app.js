const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyparser = require('body-parser')

// ///////////////////////////////
const db = require('./database/db')
const register_route = require('./routes/register_route')
// ////////////////////////////

const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use(register_route)

app.listen(5000)