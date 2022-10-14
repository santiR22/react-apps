import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/Store";

export const VerLibro = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <div>Item not found :c </div>;
  }

  return (
    <div style={{color: "white"}}>
      <h2>{item?.title}</h2>
      <div>
        {item?.cover ? <img src={item?.cover} width="400" alt="cover" /> : ""}
      </div>
      <div>{item?.autor}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "leido" : "por terminar"}</div>
      <div>{item?.review}</div>
    </div>
  );
};
