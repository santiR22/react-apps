import React, { useEffect, useRef, useState } from "react";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");
  const inputRef = useRef();
  const formRef = useRef();

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
    formRef.current.reset();
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        placeholder="Nombre de la ciudad..."
        ref={inputRef}
        type="text"
        onChange={onChange}
        style={{ color: "black" }}
        className="bg-white form-control"
      />
    </form>
  );
};
