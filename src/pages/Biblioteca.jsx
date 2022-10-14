import React from "react";
import { Book } from "../components/biblioteca/Book";
import { useAppContext } from "../context/Store";

export const Biblioteca = () => {
  const store = useAppContext();
  return (
    <div style={{ color: "white" }}>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </div>
  );
};
