import express from "express";
import path from "node:path";

const app = express();
const port = 5000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "There is my first blog kinda exciteddd",
    user: "Andy Ta",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
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
    text: req.body.message || "I hate pineapples",
    user: req.body.user || "Guest",
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
