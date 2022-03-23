const mongoose= require('mongoose');


//connect
mongoose.connect('mongodb://localhost/todos');

//connection acqire
const db= mongoose.connection;


//error
db.on('error', console.error.bind(console,"error in connecting to mongoDB"));

//up
db.once('open',()=>{
    console.log("connected to db");
})
//export
module.exports=db;