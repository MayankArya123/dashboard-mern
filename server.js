const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
// const mongoose = require('mongoose')
// dotenv.config()

// const {MONGO_URI} = require('./Config/keys')

const app = express()

//  mongoose.connect(MONGO_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true, useFindAndModify: false})

//  const connection = mongoose.connection

// connection.once('open',()=>{
//  console.log("Mongodb database connection established")
// })




  app.use(cors())
  app.use(express.json())
  app.use('/home',require('./Routes/Home'))
//   app.use('/Teacher',require('./Routes/Teacher'))

  
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))

    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


 const port= process.env.PORT || 7000

 app.listen(port,console.log(`server running at ${port}`))
