module.exports = function(port) {
  var restify = require('restify');

  var server = restify.createServer({
      name: 'shortrest',
      version: '1.0.0'
  });
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  server.listen(port, function () {});

  this.get = server.get;
  this.post = server.post;
  return server;
}
