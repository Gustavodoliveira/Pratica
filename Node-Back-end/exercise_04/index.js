//jshint esversion:6

const express = require('express')

const bodyParse = require("body-parser")

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", function(req,res){
    
    res.sendFile(__dirname + "/index.html")

})

app.post("/", function(req, res){
    var n1 = Number(req.body.height)
    var n2 = Number(req.body.weight)
    var bmi = n2/n1

        if ( bmi > 25){
        res.send("You Bmi is  " + bmi + "is a good in shape ");
    } else ( bmi < 25 ) 
     res.send("pessimous shape") ;

  

});


app.listen(3000, function() {
    console.log("start serve");
})