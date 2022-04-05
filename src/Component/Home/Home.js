import React from 'react';
import { Container } from 'react-bootstrap';
import CustomerReview from '../CustomerReview/CustomerReview';
import HeadingSection from '../HeadingSection/HeadingSection';

const Home = () => {
      return (
            <Container>
                  <HeadingSection></HeadingSection>
                  <CustomerReview></CustomerReview>
            </Container>
      );
};

export default Home;