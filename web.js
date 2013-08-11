var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var app = express.createServer(express.logger());


//Added Yelp Code to verify

var yelp = require("yelp").createClient({
  consumer_key: "kluiSDN9YGrPUPf11m5tyQ", 
  consumer_secret: "01iR86nfeFHNT68A1UsbdJr19cc",
  token: "1YvnFIvsNfNdAQPkUG1azlyjrMq2oTrC",
  token_secret: "lkIcuEbaX9NMMzsZWu4OZUWLonE"
});



app.get('/', function(request, response) {    
   var html = fs.readFileSync(htmlfile).toString();    
   response.send("Going to be sending HTML");   
response.send(html);
   

/*yelp.business("yelp-los-angeles", function(error, data) {
  console.log(error);
  //console.log(data);
  response.send(data);
});
*/

});

var port = process.env.PORT || 8080;
app.listen(port, function() {  console.log("Staging: Listening on " + port);});
