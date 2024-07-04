"use server";
import { connect } from "@/dbConfig/dbConfig";
import { todo } from "@/models/todo";

const getTodo = async () => {
  connect();

  const todos = await todo.find();

  return todos;
};

export default getTodo;
