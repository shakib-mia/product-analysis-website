import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Navigation = () => {
      return (
            <div className='sticky-top'>
                  <Navbar style={{ background: "#aeb2eb" }} expand="lg">
                        <Container className='d-flex justify-content-between'>
                              <Navbar.Brand><Link to="/" className='text-white text-decoration-none'>Suitable Watches</Link></Navbar.Brand>

                              <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                          <NavLink className='text-decoration-none text-light px-3 py-2' to="/">Home</NavLink>
                                          <NavLink className='text-decoration-none text-light px-3 py-2' to="/blogs">Blogs</NavLink>
                                          <NavLink className='text-decoration-none text-light px-3 py-2' to="/dashboard">Dashboard</NavLink>
                                          <NavLink className='text-decoration-none text-light px-3 py-2' to="/reviews">Reviews</NavLink>
                                          <NavLink className='text-decoration-none text-light px-3 py-2' to="/login">Login</NavLink>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Navigation;