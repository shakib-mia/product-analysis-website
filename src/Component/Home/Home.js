import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import suitableWatch from "../../Assets/suitable-watches.jpg"

const Home = () => {
      return (
            <Container>
                  <Row className='my-4'>
                        <Col className='my-auto'>
                              <h1 className='display-4'>Find Your</h1>
                              <h1 className='display-4 text-primary'>Suitable Watches</h1>

                              <p>
                                    If you want to get watch that suits to you, You can just click on Get Started below.
                              </p>
                              <button className='btn btn-primary'>Get Started</button>
                        </Col>
                        <Col>
                              <img src={suitableWatch} alt="headerImage" className='img-fluid' />
                        </Col>
                  </Row>
            </Container>
      );
};

export default Home;