import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.get("/home", (req, res) => {
    res.send("i`m hieu");
  });
  return app.use("/", router); // cho express hiểu được cái route
};

export default initWebRoute;
