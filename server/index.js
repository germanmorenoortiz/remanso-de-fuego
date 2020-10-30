import express from 'express';
import bodyParser from 'body-parser';
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import logger from './lib/logger.js';
import jsonResponse from './middleware/json-response.js';
import model1Router from './routes/model1.js';
//import routes from './config/routes';

const HOST = '127.0.0.1';
const PORT = 4000;

const server = express();
server.use(bodyParser.json());
server.use(httpLoggerMiddleware);
server.use(jsonResponse);
server(model1Router); //server.use(routes);
//server.use(logger);

//const noEndPointHandler = (request, response, next) => {
//response.statusCode = 404;
//response.send({
//message: 'Error: endpoint not found.',
//});
//};

//server.get('*', noEndPointHandler);

server.listen(PORT, () =>
  logger.info(`Functional server ${JSON.stringify({ HOST, PORT })}`),
);
