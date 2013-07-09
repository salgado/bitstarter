var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //read from index.html
  
  var textToShow = fs.readFileSync ("index.html", "utf-8");
  response.send ( textToShow );

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
