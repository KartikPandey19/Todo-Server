const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;


app.get('/files',function(req,res){
    fs.readdir(path.join(__dirname,'./files'),'utf-8',function(err,files){
       if(err){
        res.status(500).json({error:"no file found"})
       }else{
        res.send(files);
       }
    })
});

app.get('/files/:filesystem',function(req,res){
    const filePath = path.join(__dirname,'./files/',req.params.filesystem);
    fs.readFile(filePath,'utf-8',function(err,data){
        if(err){
            res.status(500).json({err:"no file found"})
        }else{
            res.send(data)
        }
    })
});

app.listen(port)