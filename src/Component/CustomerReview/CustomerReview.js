import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
      const [reviews, getReviews] = useState([]);

      useEffect(() => {
            fetch('customerReview.json')
                  .then(res => res.json())
                  .then(data => getReviews(data.reviews))
      }, []);

      console.log(reviews)

      return (
            <div className='row row-cols-4 d-flex justify-content-center'>
                  {
                        reviews.slice(0, 6).map(review => <ReviewCard name={review.name} review={review.review} img={review.rating}></ReviewCard>)
                  }
                  <button className='btn btn-outline-success my-3'>Show All Reviews</button>
            </div>
      );
};

export default CustomerReview;