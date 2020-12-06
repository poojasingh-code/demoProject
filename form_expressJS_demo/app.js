var express=require('express');
var path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,"public")));
app.get('/',function(req,res){
    res
    .status(200)
    .sendFile(path.join(__dirname, "public" , "index.html" ));
});
app.listen(8080,function(req,res){
    console.log("running....")
});