import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import icon from "../../public/react_logo.svg";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='black'>
      <MDBContainer fluid>
        <MDBNavbarBrand tag={Link} to='/'>
          <img src={icon} alt='logo' style={{ width: "35px" }} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} active to='/lista-tareas'>
                Tareas
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} active to='/clima'>
                Clima
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} active to='/emojis'>
                Emojis
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown animation={true}>
                <MDBDropdownToggle
                  tag='a'
                  className='nav-link'
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Bilioteca
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>
                  <MDBDropdownItem>
                    <MDBDropdownLink tag={Link} to='/books'>
                      Libros
                    </MDBDropdownLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <MDBDropdownLink tag={Link} to='/create-book'>
                      Añadir libro
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} active to='/search'>
                Buscador
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBContainer fluid className='d-flex justify-content-end'>
            <MDBBtn
              tag={Link}
              to='/login'
              className='me-2'
              color='secondary'
              rounded
            >
              Iniciar sesion
            </MDBBtn>
            <MDBBtn tag={Link} to='/register' rounded>
              Registrarse
            </MDBBtn>
          </MDBContainer>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
