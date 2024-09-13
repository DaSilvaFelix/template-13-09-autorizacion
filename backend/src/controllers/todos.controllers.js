import { database } from "../db/database.js";

export const getAlltodos = (req, res) => {
  console.log(req.user);

  const todos = database.todos;
  const data = todos.map((todo) => ({ ...todo, owner: req.user.id }));
  console.log(data);

  res.json({ data });
};

export const deleteTodos = (req, res) => {
  try {
    const idList = parseInt(req.params.id);
    const todo = database.todos;
    const index = todo.findIndex((todos) => {
      return todos.id === idList;
    });
    todo.splice(index, 1);
    res.status(200).json({
      message: "registro eliminado corretamenete",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodos = (req, res) => {
  try {
    const { id } = req.params.id;
    const { title, completed } = req.body;
    const todo = database.todos;
    const index = todo.findIndex((e) => {
      return e.id == id;
    });
    console.log(index);
  } catch (error) {}
};
