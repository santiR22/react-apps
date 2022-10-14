// import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

export const EmojiButton = ({ emoji, onClick }) => {
    
  const handleClick = () => {
    onClick(emoji);
  };

  return <button onClick={handleClick}>{emoji.symbol}</button>;
};
