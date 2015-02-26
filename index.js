var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendfile('index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function(request, response) {
    console.log('static file request : ' + request.params);
    response.sendfile(__dirname + request.params[0]);
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});