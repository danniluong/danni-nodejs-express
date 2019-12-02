const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody, Danni Luong!");
});
 
module.exports.app = app;
