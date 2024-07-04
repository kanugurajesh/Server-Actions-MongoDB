"use client";

import addTodo from "@/utils/AddTodo";
import getTodo from "@/utils/GetTodo";
import { useEffect, useState } from "react";

export default function Home() {
  const [Todos, setTodos] = useState();
  // create a server component to connect to the database

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const message = form.get("message");

    await addTodo({
      message,
    });
  };

  useEffect(() => {
    getTodo().then((data) => {
      // @ts-ignore
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* @ts-ignore */}
        {Todos && Todos?.map((todo: any) => <li key={todo._id}>{todo.todo}</li>)}
      </ul>
    </div>
  );
}
