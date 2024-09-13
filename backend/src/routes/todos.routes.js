import { Router } from "express";
import {
  deleteTodos,
  getAlltodos,
  updateTodos,
} from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/todos", validarJwt, getAlltodos);
todosRouter.delete("/todos/:id", validarJwt, deleteTodos);
todosRouter.put("/todos/:id", validarJwt, updateTodos);
export { todosRouter };
