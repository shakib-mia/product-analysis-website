import React from 'react';

const ReviewCard = (props) => {
      const { name, img, review } = props;

      return (
            <div className='card mx-2 my-2'>
                  <div className="card-body">
                        <h4 className="card-title">
                              {name}
                        </h4>
                        <img src={img} alt="review" width={70} />
                        <p>{review}</p>
                  </div>
            </div>
      );
};

export default ReviewCard;