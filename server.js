const express= require("express");
const app= express();
const db_connect=require("./db_connect");
db_connect();


app.listen(5001,(err)=>
err ? console.log(err):console.log("server is running")
);


