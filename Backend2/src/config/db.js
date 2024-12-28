const mongoose = require('mongoose');

const mongoUrl="mongodb+srv://sorabhgwala:sorabh#2004@cluster0.klhgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    
    return mongoose.connect(mongoUrl);
}


module.exports={connectDb}