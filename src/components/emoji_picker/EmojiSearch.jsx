import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";

export const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };

  return (
    <MDBInput
      type="text"
      className="bg-white"
      onChange={handleChange}
      value={value}
    />
  );
};
