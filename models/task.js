//require mongoose
const mongoose= require('mongoose');

//creating schema fopr task
const taskSchema= new mongoose.Schema({

    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String
     
    }
});


const Task= mongoose.model('Task',taskSchema);

//export the module
module.exports=Task;