import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { calendar, emails, people } from "../components/buscador/datos";
import { SearchBar } from "../components/buscador/SearchBar";

export const Buscador = () => {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const location = e.target.name;

    switch (location) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      case "calendars":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      default:
        break;
    }
  };

  const handleItemSelected = (item) => {
    setSelection(item);
  };

  return (
    <MDBContainer className="d-flex justify-content-center text-center mt-5">
      <MDBCard border="dark" className="w-50">
        <MDBCardHeader border="dark" background="dark">
          <MDBBtn
            className="mx-2 mt-1"
            color="success"
            onClick={handleClick}
            name="all"
          >
            All
          </MDBBtn>
          <MDBBtn
            className="mx-2 mt-1"
            color="success"
            onClick={handleClick}
            name="people"
          >
            People
          </MDBBtn>
          <MDBBtn
            className="mx-2 mt-1"
            color="success"
            onClick={handleClick}
            name="calendars"
          >
            Calendars
          </MDBBtn>
          <MDBBtn
            color="success"
            className="mx-2 mt-1"
            onClick={handleClick}
            name="emails"
          >
            emails
          </MDBBtn>
          {selection ? (
            <div style={{ color: "white" }}>
              Has seleccionado: {selection.title}
            </div>
          ) : (
            ""
          )}
        </MDBCardHeader>
        <SearchBar items={data} onItemSelected={handleItemSelected} />
      </MDBCard>
    </MDBContainer>
  );
};
