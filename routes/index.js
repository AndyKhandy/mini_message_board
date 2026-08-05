import { Router } from "express";

messages = [
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

const indexRouter = Router();
