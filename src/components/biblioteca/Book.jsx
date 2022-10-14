import React from "react";
import { Link } from "react-router-dom";

export const Book = ({ item }) => {
  
  return (
    <Link to={`/view-book/${item.id}`}>
      <img src={item.cover} width="200" alt={item.title} />
      <div>{item.title}</div>
    </Link>
  );
};
