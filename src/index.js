const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);
// Middleware 2
// Rotas são entendidas como middlewares no Node

app.listen(3000, () => {
  console.log('🔥 Server started');
});
