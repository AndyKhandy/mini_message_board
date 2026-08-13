import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";
import process from "node:process";

if (process.env.NODE_ENV !== "production"){
    process.loadEnvFile();
}

const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
