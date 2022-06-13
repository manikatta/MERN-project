
const mongoose=require("mongoose")

const DB ="mongodb+srv://mani:8L9qbJR1f4MwoMrf@cluster0.v8ay3.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology :true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));