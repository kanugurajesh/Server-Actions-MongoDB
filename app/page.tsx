import { connect } from "@/dbConfig/dbConfig";
import { todo } from "@/models/todo";
import { useEffect } from "react";

export default function Home() {
  // create a server component to connect to the database

  const connectToDatabase = async () => {
    "use server";
    connect();

    const newTodo = new todo({
      todo: "Learn how to connect to a database",
      isCompleted: false,
    });

    await newTodo.save();

    console.log("Todo has been saved to the database");
  };

  return (
    <main>
      <h1></h1>
    </main>
  );
}
