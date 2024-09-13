import { Router } from "express";
import {
  deleteTodos,
  getAlltodos,
  updateTodos,
} from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAlltodos);
todosRouter.delete("/:id", validarJwt, deleteTodos);
todosRouter.put("/:id", validarJwt, updateTodos);
export { todosRouter };
