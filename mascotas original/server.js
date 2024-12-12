const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Ajusta la ruta si tu data.json está en otra ubicación
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; 
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});