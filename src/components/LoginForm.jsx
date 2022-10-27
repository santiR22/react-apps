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
  MDBCheckbox
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MDBContainer>
      <MDBRow className='mt-5 justify-content-center'>
        <MDBCol lg='5'>
          <form>
            <MDBCard shadow='5' className='md-4' border='black'>
              <MDBCardHeader
                className='text-center'
                border='black'
                style={{ color: "black" }}
              >
                <h3>Bienvenido!!!</h3>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBInput
                  className='mb-4'
                  type='email'
                  label='correo electronico...'
                  style={{ color: "black" }}
                  labelStyle={{ color: "black" }}
                />
                <MDBInput
                  className='mb-4'
                  type='password'
                  label='contraseña...'
                  style={{ color: "black" }}
                  labelStyle={{ color: "black" }}
                />

                <MDBRow className='mb-4'>
                  <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox label='Recordarme' defaultChecked />
                  </MDBCol>
                  <MDBCol>
                    <Link to='#!'>Forgot password?</Link>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter border='black' className='text-center'>
                <MDBBtn onClick={handleSubmit}>Continuar</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
