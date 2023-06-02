const express = require('express');
const bodyparser = require('body-parser');
const request = require('request')
const https = require("https");


const app = express();

app.use(bodyparser.urlencoded({extended: true }))

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
})

/* app.use(express.static("nome da pasta com arquivos estaticos como css e outros ")), usa essa funcao para 
exibir arquivos estaticos
*/

app.post("/", function(req, res){
 
    var firstName = req.body.Firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;
    
    var data = {
        members : [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/3bdaf71bf8";

    const options = {
        method: "POST",
        auth: "gustavo:03672bc556b50247b2dc35b7e9442f44-us14"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.listen(3000, function(){
    console.log('starting server');
});


//api key
//03672bc556b50247b2dc35b7e9442f44-us14


/* list id
3bdaf71bf8 */