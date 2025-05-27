const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express()

app.use(cors()) // Enable CORS for all routesnpm run dev
app.use(express.json()) // Middleware to parse JSON bodies

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/ai',aiRoutes)
module.exports=app