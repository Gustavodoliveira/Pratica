//jshint esversion:6

/*npm utilizadas : express , nodemon : seu codigo atualiza igual o live server , body-parser: para pegar os numeros do metodo post.
*/

const express = require("express");

const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 * n2 ;
    res.send("Seu resultado é  " +  result );
})
app.listen(4050, function(){
    console.log('starting server');
});