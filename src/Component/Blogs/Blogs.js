import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
      return (
            <Container className='col-12 col-md-8 col-lg-5 mt-4'>
                  <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                              <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                              <Accordion.Body>
                                    <p>Semantic tags are those who are meaningful to human being. It describes clearly its meaning to both the machine and human being.</p>
                                    <p><b>Examples</b>:
                                          <ul>
                                                <li>Header</li>
                                                <li>Footer</li>
                                                <li>Nav</li>
                                                <li>Section</li>
                                                <li>Aside</li>
                                          </ul>
                                          etc.
                                    </p>
                              </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                              <Accordion.Header>What Are the Differences among Inline, Block and Inline-Block?</Accordion.Header>
                              <Accordion.Body>
                                    <p>
                                          Inline Element uses the space that it needs, but Block Element uses the full width of screen though it needs a smaller one.
                                    </p>
                                    <p>
                                          On the other hand, Inline Block behaves like inline Elements, but we can set the width of Inline Block Element where Inline Elements' width cannot be changed
                                    </p>
                              </Accordion.Body>
                        </Accordion.Item>
                  </Accordion>
            </Container>
      );
};

export default Blogs;