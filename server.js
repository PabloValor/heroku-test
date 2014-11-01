var express = require('express'),
      swig = require('swig'),
      app = express();

var port = process.env.PORT || 8000;

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public')); // assets (css/js/img)

app.get('/', function(req, res) {

      res.render('index');
});

app.listen(port, function() {

      console.log('App running on port: ' + port);
});