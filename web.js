var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  //read from index.html
  
  var textToShow = fs.readFileSync ("index.html", "utf8");
  var buf = new Buffer (textToShow);

  response.send ( buf.toString('utf8') );

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
