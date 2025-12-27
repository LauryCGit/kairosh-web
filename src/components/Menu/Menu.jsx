//import { useState } from 'react'
import './Menu.css';
import { Container, Navbar, Nav} from 'react-bootstrap';

import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo_k from '../../assets/logos/K-LogoB.png';


const Menu = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";

    return ( 
    
      <div className='contenedor-nav'>
        <Navbar expand="lg"  id='nav-menu'>
          <Container>
            <Navbar.Brand className="logo-mobile">
              <img className='logo-mobile-img' src={logo_k} alt="Kairosh" />
            </Navbar.Brand>
            
            <Navbar.Toggle 
              id='menu-toggle' 
              aria-controls="basic-navbar-nav"
              className="ms-auto"
            />
            <Navbar.Collapse id="basic-navbar-nav" 
            className="basic-navbar-nav justify-content-end">
              <Nav className='enlaces-menu'>
              {isHome ? (
                <>
                  <Nav.Link 
                      as={ScrollLink} 
                      to="/"
                      smooth={true}  
                      offset={-70} 
                      duration={500} 
                      className="enlace active"
                      translate="no" 
                  >
                      Inicio
                  </Nav.Link>
                  <Nav.Link 
                    as={ScrollLink} 
                    to="acerca-de" 
                    smooth={true} 
                    offset={-70}
                    duration={500}
                    className="enlace"
                    translate="no" 
                    >
                    Acerca de
                  </Nav.Link>
                  <Nav.Link 
                    as={ScrollLink} 
                    to="servicios" 
                    smooth={true} 
                    offset={-70}
                    duration={500}
                    className="enlace"
                    >
                    Servicios
                  </Nav.Link>
                  <Nav.Link 
                    as={ScrollLink} 
                    to="contacto" 
                    smooth={true} 
                    offset={-70}
                    duration={500}
                    className="enlace"
                  >
                    Contacto
                  </Nav.Link>
                </>
              ):(
                <Nav.Link as={RouterLink} to="/" className='enlace'>
                  Volver
                </Nav.Link>
              )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
 
export default Menu;