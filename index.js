const app = require('./server/config/express')();

require('./server/config/database');

app.listen(app.get('port'), () => {
  console.log(`server listening on port ${app.get('port')}`);
});