import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-User", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  router.get("/home", (req, res) => {
    res.send("i`m hieu");
  });
  return app.use("/", router); // cho express hiểu được cái route
};

export default initWebRoute;
