import { Router } from "express";
import { getMessageById, getMessages } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:id", getMessageById);

export default indexRouter;
