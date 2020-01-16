const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0-9fkne.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cors());

app.use(express.json());

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body Params : request.body (Dados para criação  ou alteração de um registro)

// MongoDB (Não-relacional)

app.use(routes);

app.listen(3333);
