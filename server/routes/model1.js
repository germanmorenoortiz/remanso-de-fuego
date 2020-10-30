import express from 'express';
import {
  createModel1,
  getModel1byId,
  listModel1,
} from '../controllers/model1.js';

const model1Router = express.Router();

model1Router.get('/model1', listModel1);

model1Router.get('/model1/:id', getModel1byId);

model1Router.post('/model1', createModel1);

export default model1Router;
