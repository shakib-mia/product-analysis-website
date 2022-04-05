import { Link } from 'react-router-dom';
import Custom from '../Custom/Custom';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
      const reviews = Custom('customerReview.json');

      return (
            <div className='text-center py-4'>
                  <h1>Customer Reviews</h1>

                  <div className='row row-cols-4 d-flex justify-content-center text-start'>
                        {reviews.slice(0, 3).map(review => <ReviewCard key={review.id} name={review.name} img={review.rating} review={review.review}></ReviewCard>)}

                  </div>
                  <Link to="/reviews" className='btn btn-outline-primary'>Show All Review</Link>
            </div>
      )
};

export default CustomerReview;