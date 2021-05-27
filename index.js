const express = require("express");
const app = express();
const port = 3006;

app.get('/rag',function(req,res) { res.send("hellow ") })

app.post('/',(req,res) => { 
    console.log(req);
    res.send("hellow i am post api "); })


app.listen(port,() => console.log(`yes I am listing at  http://localhost:${port}`))

