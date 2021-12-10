const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/net-builder'));
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/net-builder/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
