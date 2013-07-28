var CAMPAIGN_GOAL = 1000; // Your fundraising goal, in dollars
 
// Initialize an Express app
var express = require('express');
var app = express.createServer();
app.use("/static", express.static(__dirname + '/static')); // Serve static files
app.use(express.bodyParser()); // Can parse POST requests
app.listen(1337); // The best port
console.log("App running on http://localhost:1337");
 
// Serve homepage
app.get("/",function(request,response){
 
    // TODO: Actually get fundraising total
    response.send(
        "<link rel='stylesheet' type='text/css' href='/static/fancy.css'>"+
        "<h1>Your Crowdfunding Campaign</h1>"+
        "<h2>raised ??? out of $"+CAMPAIGN_GOAL.toFixed(2)+"</h2>"+
        "<a href='/fund'>Fund This</a>"
    );
 
});
 
// Serve funding page
app.get("/fund",function(request,response){
    response.sendfile("fund.html");
});