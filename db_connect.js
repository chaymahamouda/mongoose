const mongoose= require("mongoose");

const db_connect = async () => {
    try{
        const result= await mongoose.connect(
    "mongodb+srv://chayma:chayma123@contactlist.b2tum.mongodb.net/?retryWrites=true&w=majority");
console.log("database is connected")
    }catch (error){
        console.log(error);
        
    }
};
module.exports=db_connect;