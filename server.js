const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const port = process.env.PORT || 3000
import { ArticleModel } from '../models/article'

connectDB()

const app = express()

app.use('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get('/articles', async (req, res) => res.send(await ArticleModel.find()))


// Test to make sure localhost is working
app.get('/', (req, res) => res.send('Welcome'))

app.listen(port, () => console.log(`Server started on port ${port}`))