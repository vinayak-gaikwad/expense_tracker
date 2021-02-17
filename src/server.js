const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("hello")
    
})

app.post('/', (req, res)=>{
    res.send('creating new transactions')
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
})