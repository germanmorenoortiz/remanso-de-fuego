export const listModel1 = async (request, response, next) => {
  const Model1List = await getAllModel1();
  const model1 = JSON.parse(Model1List);

  response.statusCode = 200;
  response.send(JSON.stringify(model1));
};

export const getModel1byId = async (request, response, next) => {
  const {
    params: { id },
  } = request;

  const model1Resource = await getAllModel1(id);

  if (model1Resource) {
    response.setHeader('Content-type', 'application/json');
    response.statusCode = 200;
    return response.send(JSON.stringify(model1Resource));
  } else {
    response.setHeader('Content-type', 'application/json');
    response.statusCode = 404;
    return response.send(
      JSON.stringify({
        message:
          'ERROR: Ups, sorry, something was happened into the server/Ups, perdón algo ha fallado en el servidor.',
      }),
    );
  }
};

export const createModel1 = async (request, response) => {
  const { body } = request;

  const newModel1Resource = await createModel1Resource(body);
};
