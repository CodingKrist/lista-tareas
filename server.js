const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const tareasRoutes = require('./routes/tareas')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoutes)
app.use('/listatareas', tareasRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running')
}) 