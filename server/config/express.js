const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

module.exports = () => {
  const app = express();

  app.set('port', (process.env.PORT || 3001));
  app.set('client', path.resolve(__dirname, '../../client/dist'));
  
  app.use(cors());
  app.use(express.static(app.get('client')));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  consign({cwd: 'server/app'})
    .include('models')
    .include('controllers')
    .then('routes')

    .into(app);

  return app;
}