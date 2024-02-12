const mongoose = require('mongoose')
const connectionString = process.env.connectionString 
// Connect to MongoDB using Mongoose
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb Atlast Connected with PFServer");
}).catch((err)=>{
    console.log("Mongo Connection Failed!!!",err);
})