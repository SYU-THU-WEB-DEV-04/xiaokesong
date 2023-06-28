const fs = require('fs');
const path = require('path');
const express = require('express');
const cors= require('cors');
const app = express()
app.use(cors())
app.get('/', (req, res) =>{
    var data=null
    fs.readFile('./juxing.json','utf8',(err,dataStr)=>{
        if(err) return console.log('文件读取失败',+err.message);
        data=JSON.parse(dataStr)
        res.send(data);
    })
})

app.listen(2000,()=>{
    console.log('服务已启动');
})