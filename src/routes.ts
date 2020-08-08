import express from "express";
import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMInutes";
import ClassController from "./controllers/ClassesControllers";
import ConnectionsControllers from "./controllers/ConnectionsControllers";

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsControllers = new ConnectionsControllers();

routes.get("/", (request, response) => {
  return response.json();
});

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;
