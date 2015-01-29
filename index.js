var restify = require('restify');

var server = restify.createServer({
    name: 'shortrest',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

exports.server = server;
