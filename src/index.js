const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

// Middleware 1
// Rotas são entendidas como middlewares no Node
app.use(routes);

// Middleware 2
// Error Handler -> Manipulador de Erros
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => {
  console.log('🔥 Server started');
});
