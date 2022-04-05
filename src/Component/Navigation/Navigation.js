import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
      return (
            <div className='sticky-top'>
                  <Navbar bg="light" expand="lg">
                        <Container className='d-flex justify-content-between'>
                              <Navbar.Brand><Link to="/" className='text-dark text-decoration-none'>Suitable Watches</Link></Navbar.Brand>

                              <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                          <Link className='text-decoration-none text-dark px-3 py-2' to="/">Home</Link>
                                          <Link className='text-decoration-none text-dark px-3 py-2' to="/blogs">Blogs</Link>
                                          <Link className='text-decoration-none text-dark px-3 py-2' to="/dashboard">Dashboard</Link>
                                          <Link className='text-decoration-none text-dark px-3 py-2' to="/videos">Videos</Link>
                                          <Link className='text-decoration-none text-dark px-3 py-2' to="/login">Login</Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Navigation;