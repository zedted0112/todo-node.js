//require express
const express= require('express');
const port= 8000;


// calling express
const app= express();









//setting view engine to ejs
app.set('view engine','ejs');

app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assests'));



app.get('/',function(req,res){

    return res.render('home',{

        title:'home'
        
    });
})



//listen
app.listen(port,function(err){
    if(err){
        console.log(`error  in running port : ${port}` );
    }
    console.log(`sucessfully connected:${port}`);
})