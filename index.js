var restify = require('restify');

module.exports = function(port) {
  var self = this;
  self.server = restify.createServer({
      name: 'shortrest',
      version: '1.0.0'
  });
  self.server.use(restify.acceptParser(server.acceptable));
  self.server.use(restify.queryParser());
  self.server.use(restify.bodyParser());
  self.get = self.server.get.bind(self.server);
  self.post = self.server.post.bind(self.server);
  self.server.listen(port);
  return self;
}
