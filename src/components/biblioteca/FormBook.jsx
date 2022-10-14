import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBFile,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/Store";

export const FormBook = () => {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      autor,
      cover,
      intro,
      completed,
      review,
    };

    //TODO: mandar a registrar el libro...
    store.createItem(newBook);
    navigate("/books");
  }

  /* Permite guardar una imagen de maner local... */
  function handleOnchangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setCover(reader.result.toString());
    };
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "autor":
        setAutor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
        break;
    }
  }

  return (
    <MDBContainer
      className=" text-center mt-5"
      style={{ color: "black", backgroundColor: "white" }}
    >
      <form onSubmit={handleSubmit}>
        <h3>Datos del nuevo libro</h3>
        <MDBRow center className="mt-3 mb-4 mx-4 ">
          <MDBCol size={4}>
            <MDBInput
              labelStyle={{ color: "black" }}
              label="Titulo..."
              type="text"
              name="title"
              id="form1"
              onChange={handleChange}
              value={title}
              className="mb-4"
            />

            <MDBInput
              labelStyle={{ color: "black" }}
              label="Autor..."
              type="text"
              name="autor"
              onChange={handleChange}
              value={autor}
              className="mb-4"
            />

            <MDBInput
              labelStyle={{ color: "black" }}
              label="Introduccion..."
              type="text"
              name="intro"
              onChange={handleChange}
              value={intro}
              className="mb-4"
            />

            <MDBInput
              labelStyle={{ color: "black" }}
              label="Reseña..."
              type="text"
              name="review"
              onChange={handleChange}
              value={review}
              className="mb-3"
            />

            <MDBFile
              labelStyle={{ color: "black" }}
              labelClass="d-flex text-start"
              label="Portada"
              id="customFile"
              type="file"
              name="cover"
              onChange={handleOnchangeFile}
            />
          </MDBCol>
          <MDBCol size={4}>
            <div className="text-center mb-4">
              {!!cover ? (
                <img src={cover} width="200" height="250" alt="preview" />
              ) : (
                ""
              )}
            </div>

            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mt-4"
              label="Completado?"
              name="completed"
              id="flexCheckDefault"
              onChange={handleChange}
              value={completed}
            />
          </MDBCol>
        </MDBRow>

        <MDBBtn
          type="submit"
          value="Register books"
          onChange={handleChange}
          className="mb-4"
          color="secondary"
          size="lg"
        >
          Registrar libro
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};
