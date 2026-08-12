import express from "express";
import path from "node:path";
import { loadEnvFile } from "node:process";

loadEnvFile();

const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

const messages = [
  {
    userMessage: "Hi there!",
    username: "Amando",
    added: new Date(),
  },
  {
    userMessage: "There is my first blog kinda exciteddd",
    username: "Andy Ta",
    added: new Date(),
  },
  {
    userMessage: "Hello World!",
    username: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  messages.push({
    userMessage: req.body.message || "I hate pineapples",
    username: req.body.username || "Guest",
    added: new Date(),
  });
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.render("individualMessage", { message: messages[id] });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
