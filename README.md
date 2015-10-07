Drop the boilerplate for simple REST servers.  Wraps restify. Also includes `restify-jwt` as a global.

```javascript
var web = require('shortrest')(8099);

web.get('/echo/:name', function (req, res) {
  res.send(req.params);
}); 

```

Example using JWT:

```javascript
var web = require('shortrest')(8099);

web.get('/protected',
  jwt({secret: 'shhhhhhared-secret'}),
  function(req, res) {
    if (!req.user.admin) return res.send(401);
    res.send(200);
  });
```
