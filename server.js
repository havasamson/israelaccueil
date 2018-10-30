var express = require('express');
var app = express();

//app.configure, app.use etc


app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
  res.send('This is from the root directory')
});

app.listen(process.env.PORT || '8000', function(){
  console.log("8000. Baruh Hashem!")
});


app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index-1.html")
})