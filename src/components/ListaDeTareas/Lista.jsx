import React, { useState } from "react";
import { Tareas } from "./Tareas";
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBRow,
} from "mdb-react-ui-kit";
import "../../css/styles.css";

export const Lista = () => {
  const [title, setTitle] = useState("");
  const [tarea, setTarea] = useState([]);

  /* Valor ingresado en el input... */
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Estructura de la tarea */
    const newTarea = {
      id: crypto.randomUUID(),
      title: title,
    };

    /* El contenido del input (la tarea) se almacena en "temp"... */
    const temp = [...tarea];
    temp.unshift(newTarea);

    /* Se añade el contenido de "temp" al inicio de la lista... */
    setTarea(temp);

    /* Limpia el contenido del input... */
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...tarea];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTarea(temp);
  };

  const handleDelete = (id) => {
    const temp = tarea.filter((item) => item.id !== id);
    setTarea(temp);
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <h2
          className="text-center"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Lista de tareas
        </h2>
        <MDBCol md="6">
          <MDBCard style={{ backgroundColor: "skyblue" }}>
            <form onSubmit={handleSubmit}>
              <MDBInputGroup>
                <input
                  className="form-control"
                  placeholder="Describa la tarea..."
                  onChange={handleChange}
                  value={title}
                  type="text"
                  style={{ color: "black" }}
                />
                <MDBBtn onClick={handleSubmit} type="submit">
                  Crear tarea
                </MDBBtn>
              </MDBInputGroup>
            </form>

            <div>
              {tarea.map((item) => (
                <Tareas
                  key={item.id}
                  item={item}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
