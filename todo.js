const bodyParser = require("body-parser");
const express = require("express");
const { todo } = require("node:test");
const app = express();
const port = 3000;
let todos = [];


app.use(bodyParser.json());

app.get('/todos',function(req,res){
    res.json(todos)
});

app.get('/todos/:id',function(req,res){
    const todo = todos.find(t=>t.id===parseInt(req.params.id))
    if(!todo){
        res.status(404).send
    }else{
        res.send(todo)
    }

});

app.post('/todos',function(req,res){
    const newTodo= {
        id:Math.floor(Math.random()*10000),
        title:req.body.title,
        description:req.body.description
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
    
});

app.put('/todos/:id',function(req,res){
    const todoIndex = todos.findIndex(t=>t.id===parseInt(req.params.id))
    if(!todos){
        res.status(404).json({error:"file not found"})
    }else{
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description =req.body.description;
        res.json(todos[todoIndex])
    }
});

app.delete('/todos/:id',function(req,res){
    const todoIndex  = todos.findIndex(t=>t.id===parseInt(req.params.id))
    if(!todo){
res.status(401).json({})
    }else{
        todos.splice(todoIndex,1)
        res.send()
    }
})

app.listen(port);