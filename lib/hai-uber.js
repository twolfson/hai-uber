var http = require('http');

module.exports = function (port) {
  var app = http.createServer(function (req, res) {
    res.end('Hello World!\n');
  });

  app.listen(port);
  return app;
};

if (require.main === module) {
  module.exports(9001);
  console.log('Server is listening at http://127.0.0.1:' + 9001 + '/');
}

