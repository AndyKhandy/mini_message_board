import { Router } from "express";
import { getForm, insertNewMessage } from "../controllers/newController.js";

const newRouter = Router();

newRouter.get("/", getForm);

newRouter.post("/", insertNewMessage);
export default newRouter;
