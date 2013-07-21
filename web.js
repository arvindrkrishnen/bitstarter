var express = require('express');
var app = express.createServer();
var fs = require('fs');

app.use(express.logger());

var array = fs.readFileSync('index.html').toString().split("\n");


app.get('/', function(request, response) {
for (i in array)
{
  response.send(array[i]);
}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
