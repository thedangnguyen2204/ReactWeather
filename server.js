var express = require('express');

var app = express();
const PORT =  process.env.PORT || 3000;

app.use(function (req, res, next) { // convert https to http
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express is up on PORT ' + PORT);
});
