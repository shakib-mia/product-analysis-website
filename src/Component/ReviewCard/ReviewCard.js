import React from 'react';
import Card from "react-bootstrap";

const ReviewCard = (props) => {
      return (
            <div className='card mx-2 my-2'>
                  <div className="card-body">
                        <h4 className="card-title">
                              {props.name}
                        </h4>
                        <img src={props.img} alt="review" width={70} />
                        <p>{props.review}</p>
                  </div>
            </div>
      );
};

export default ReviewCard;