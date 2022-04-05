import React from 'react';
import { Container } from 'react-bootstrap';
import Custom from '../Custom/Custom';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
      const reviews = Custom('customerReview.json');

      return (
            <Container>
                  <h1 className='text-center'>All Reviews</h1>

                  <div className='row row-cols-4'>
                        {reviews.map(review => <ReviewCard key={review.id} name={review.name} img={review.rating} review={review.review}></ReviewCard>)}
                  </div>
            </Container>
      );
};

export default Reviews;