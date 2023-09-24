// page.js code

"use client";
import { useState } from "react";
import List from "./List";
import Button from "./Button";

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    "Hello World!",
    "Second Value",
    "Third Value",
  ]);

  const onAdd = () => {
    console.log("On Add Pressed:", text);
    setList([...list, text]);
    setText(""); // Clear the input field after adding an item
  };

  const onDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>

      <Button text={text} setText={setText} onAdd={onAdd} />

      <List list={list} onDelete={onDelete} />
    </main>
  );
}
