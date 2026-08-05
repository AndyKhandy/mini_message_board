import express from "express"
import path from "node:path"

const app = express();
const port = 5000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");