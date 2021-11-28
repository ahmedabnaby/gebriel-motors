import React from 'react'
import { Navbar, Container,  Nav, Offcanvas } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export default function Navs() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    return(
<Navbar collapseOnSelect expand="lg" bg="black" color="white" variant="dark">
  <Container fluid>
  <Navbar.Brand href="/"><img src="assets/images/logo.png" className="logoIMG" alt="..."/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
      {location.pathname === "/"
      
      ?<Nav className="me-auto">
       <Nav.Link active href="/">Home</Nav.Link>
      <Nav.Link href="/veichles">Veichles</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/our-benfits">Our Benfits</Nav.Link>
      </Nav>
      :
      location.pathname === "/veichles"
      ?<Nav className="me-auto">
      <Nav.Link  href="/">Home</Nav.Link>
     <Nav.Link active href="/veichles">Veichles</Nav.Link>
     <Nav.Link href="/products">Products</Nav.Link>
     <Nav.Link href="/services">Services</Nav.Link>
     <Nav.Link href="/our-benfits">Our Benfits</Nav.Link>
     </Nav>
     :
     location.pathname === "/products"
     ?<Nav className="me-auto">
     <Nav.Link  href="/">Home</Nav.Link>
    <Nav.Link href="/veichles">Veichles</Nav.Link>
    <Nav.Link active href="/products">Products</Nav.Link>
    <Nav.Link href="/services">Services</Nav.Link>
    <Nav.Link href="/our-benfits">Our Benfits</Nav.Link>
    </Nav>
    :
    location.pathname === "/services"
    ?<Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
   <Nav.Link href="/veichles">Veichles</Nav.Link>
   <Nav.Link href="/products">Products</Nav.Link>
   <Nav.Link active href="/services">Services</Nav.Link>
   <Nav.Link href="/our-benfits">Our Benfits</Nav.Link>
   </Nav>
   :
   location.pathname === "/our-benfits"
   ?<Nav className="me-auto">
   <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/veichles">Veichles</Nav.Link>
  <Nav.Link href="/products">Products</Nav.Link>
  <Nav.Link  href="/services">Services</Nav.Link>
  <Nav.Link active href="/our-benfits">Our Benfits</Nav.Link>
  </Nav>
  :
  <Nav className="me-auto">
   <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/veichles">Veichles</Nav.Link>
  <Nav.Link href="/products">Products</Nav.Link>
  <Nav.Link href="/services">Services</Nav.Link>
  <Nav.Link href="/our-benfits">Our Benfits</Nav.Link>
  </Nav>
    }
      
  </Navbar.Collapse>
      <img src="assets/images/sidebar.png" alt="..." onClick={handleShow} className="sidebarIMG"/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  </Container>
</Navbar>
);
}