const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody, Danni Luong 20191201!");
});
 
module.exports.app = app;
