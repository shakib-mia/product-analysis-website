import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
      return (
            <div className='sticky-top'>
                  <Navbar style={{ background: "#aeb2eb" }} expand="lg">
                        <Container className='d-flex justify-content-between'>
                              <Navbar.Brand><Link to="/" className='text-white text-decoration-none'>Suitable Watches</Link></Navbar.Brand>

                              <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                          <Link className='text-decoration-none text-white px-3 py-2' to="/">Home</Link>
                                          <Link className='text-decoration-none text-white px-3 py-2' to="/blogs">Blogs</Link>
                                          <Link className='text-decoration-none text-white px-3 py-2' to="/dashboard">Dashboard</Link>
                                          <Link className='text-decoration-none text-white px-3 py-2' to="/reviews">Reviews</Link>
                                          <Link className='text-decoration-none text-white px-3 py-2' to="/login">Login</Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Navigation;