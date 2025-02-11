const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("jobs.json"); // Make sure this file exists in the same directory
const middlewares = jsonServer.defaults({
  static: false, // Disable serving static files from `/public`
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
