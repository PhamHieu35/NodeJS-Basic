import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
// import connection from "./config/connectDB";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000; // trường hợp bị lỗi sẽ lấy port = 3000
console.log("check port", port);

// set up view Engine
configViewEngine(app);

// init Web Route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
