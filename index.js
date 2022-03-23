//require express
const express= require('express');
const port= 8000;

//import db
const db= require('./config/mongoose')

// import schema 
const Task = require('./models/task')

// calling express
const app= express();









//setting view engine to ejs
app.set('view engine','ejs');

app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assests'));


//render home  page
app.get('/', function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            title: "Home",
            task: task
        });
    }
)});

// create a task

app.post('/create-task',function(req,res){


    Task.create({
        

        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err, newtask){
        if(err){
            console.log("error in creating task");
            return;
        }
   
        return res.redirect('back');
    });
});
//delete
app.get('/delete-task/', function(req,res){

   let id= req.query.id;
   Task.findByIdAndDelete(id,function(err){
       if(err){
           console.log("err");
           return;
       }
       return res.redirect('back');
   })

   
    
    
    
    
    
    
    });









//listen
app.listen(port,function(err){
    if(err){
        console.log(`error  in running port : ${port}` );
    }
    console.log(`sucessfully connected:${port}`);
})