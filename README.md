Drop the boilerplate for simple REST servers.  Wraps restify.

```javascript
var web = require('shortrest')(8099);

web.get('/echo/:name', function (req, res) {
  res.send(req.params);
}); 

```
