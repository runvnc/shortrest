var restify = require('restify');
var jwt = require('restify-jwt');
global['jwt'] = jwt;

module.exports = function(port) {
  var self = {};
  global['jwt'] = jwt;
  self.server = restify.createServer({
      name: 'shortrest',
      version: '1.0.0'
  });
  self.server.use(restify.plugins.acceptParser(self.server.acceptable));
  self.server.use(restify.plugins.queryParser());
  self.server.use(restify.plugins.bodyParser());
  self.get = self.server.get.bind(self.server);
  self.post = self.server.post.bind(self.server);
  self.server.listen(port);
  self.jwt = jwt;
  return self;
}
