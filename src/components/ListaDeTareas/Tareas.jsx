import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import React, { useState } from "react";

export const Tareas = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdate = () => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form onSubmit={handleSubmit}>
        <MDBInputGroup className="mt-3">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={newValue}
          />
          <MDBBtn color="secondary" onClick={handleClickUpdate}>
            Actualizar
          </MDBBtn>{" "}
        </MDBInputGroup>
      </form>
    );
  };

  const WorkElement = () => {
    return (
      <div className="d-flex m-3 align-items-end">
        <h5 className="mr-auto">{item.title} </h5>
        <div className="mx-auto " >
          <MDBBtn color="success" onClick={() => setIsEdit(true)}>
            Editar
          </MDBBtn>{" "}
          <MDBBtn color="danger" onClick={(e) => onDelete(item.id)}>
            Eliminar
          </MDBBtn>{" "}
        </div>
      </div>
    );
  };

  return (
    <>
      <div>{isEdit ? <FormEdit /> : <WorkElement />}</div>
    </>
  );
};
