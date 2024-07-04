"use server";

import { connect } from "@/dbConfig/dbConfig";
import { todo } from "@/models/todo";

const addTodo = async ({ message }: any) => {
  connect();

  const newTodo = new todo({
    todo: message,
    isCompleted: false,
  });

  await newTodo.save();
};

export default addTodo;
