import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("../jobs.json"); // Make sure this file exists in the same directory
// const middlewares = defaults({
//   static: false, // Disable serving static files from `/public`
// });

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
