import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const PrimaryHeader = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
  <Container fluid className='d-flex justify-content-between'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>

      
    </>
  )
}
