import { request } from "express";
import { database } from "../db/database.js";

export const getAlltodos = (req, res) => {
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
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const todo = database.todos;
    console.log(todo);
    const index = todo.findIndex((element) => {
      return element.id === id;
    });
    todo[index].title = title;
    todo[index].completed = completed;
    res.status(200).json({
      message: "registro actualizado correctament",
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (req, res) => {
  try {
    const id = req.user.id;
    const { title, completed } = req.body;
    database.todos.push({
      id: database.todos.length + 1,
      title: title,
      completed: completed,
      owner: id,
    });
    res.status(200).json({
      message: "todo creado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
