import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World on Typescript in GoStack' }),
);

export default routes;
