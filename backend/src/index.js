 /*
 Métodos http:
    Get: Buscar/listar uma informação do backend
    Post: Criar uma informação no backend
    Put: Altera uma informação no backend
    Delete: Deleta uma informação no backend
 */

/*
Tipos de parametros:
    Query: Paramentros nomeados enviados na rota após o "?" (Filtros, paginação)
    Route: Parametros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Tipos de banco de dados
    SQL: MySQL, SQLite....   < o mais utilizado no mercado
    NoSQL: MongoDB, ChouchDB...
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/

const express = require('express'); //importa o modulo express para a variavel express
const cors = require('cors');
const routes = require('./routes');

const app = express();   //armazena a aplicação, vai guardar as rotas e tals 

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);    // para a cessar a aplicacao - localhost:3333

