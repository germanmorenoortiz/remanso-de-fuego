import { promises as fs } from 'fs';
//import { v4 as uuidv4 } from 'uuid';
///PONLE UN ID AL POST A MANO, QUE ASÍ NO FUNCIONA, A SABER POR QUÉ

export const getAllModel1 = async () => {
  const model1List = await fs.readFile('./data/films.json');
  return model1List;
};

export const getModel1byId = async (id) => {
  const model1File = await fs.readFile('./data/model1.json');
  const { model1 } = JSON.parse(model1File);
  const model1Resource = model1.find((item = item.id === id));
  return model1Resource;
};

export const createModel1Resource = async (data) => {
  console.log({ data });
  const model1File = await fs.readFile('./data/model1.json');
  const { model1 } = JSON.parse(model1File);
  //console.log({ model1 });
  model1.push({ ...data, id: uuidv4() });
  console.log({ model1 });
};
