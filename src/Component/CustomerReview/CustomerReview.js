import { Link } from 'react-router-dom';
import Custom from '../Custom/Custom';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
      const reviews = Custom('customerReview.json');

      return (
            <div className='row row-cols-4 mx-auto'>
                  {reviews.slice(0, 3).map(review => <ReviewCard key={review.id} name={review.name} img={review.rating} review={review.review}></ReviewCard>)}

                  <Link to="/reviews" className='btn btn-outline-primary mx-auto'>Show All Review</Link>
            </div>
      )
};

export default CustomerReview;