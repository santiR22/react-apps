import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MDBContainer>
      <MDBRow className='mt-5 justify-content-center'>
        <MDBCol size='auto'>
          <form>
            <MDBCard shadow='5' className='md-4' border='black'>
              <MDBCardHeader
                className='text-center'
                border='black'
                style={{ color: "black" }}
              >
                <h3>Registrese!!!</h3>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className='mb-4'>
                  <MDBCol xs={12} md={6}>
                    <MDBInput
                      label='Nombre...'
                      style={{ color: "black" }}
                      labelStyle={{ color: "black" }}
                      className='mb-3'
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label='Apellido...'
                      style={{ color: "black" }}
                      labelStyle={{ color: "black" }}
                    />
                  </MDBCol>
                </MDBRow>
                <select
                  className='form-select mb-4'
                  aria-label='Default select example'
                >
                  <option defaultValue>Seleccione su ocupacion</option>
                  <option value='1'>Ingeiero agronomo</option>
                  <option value='2'>Productor agricola</option>
                  <option value='3'>Three</option>
                </select>
                <MDBInput
                  className='mb-4'
                  type='email'
                  id='form3Example3'
                  label='correo electronico...'
                  style={{ color: "black" }}
                  labelStyle={{ color: "black" }}
                />
                <MDBInput
                  className='mb-4'
                  type='password'
                  id='form3Example4'
                  label='contraseña...'
                  style={{ color: "black" }}
                  labelStyle={{ color: "black" }}
                />
              </MDBCardBody>
              <MDBCardFooter border='black' className='text-center'>
                <MDBBtn onClick={handleSubmit}>Terminar</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
