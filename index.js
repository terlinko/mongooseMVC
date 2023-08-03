const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')

const UserRouter = require('./routes/userRouter')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));



app.use('/user', UserRouter)
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
    console.log('http://localhost:'+ process.env.PORT)
})