import React from 'react';
import errorImage from "../../Assets/404.jpg"

const ErrorPage = () => {
      return (
            <div className='text-center my-5'>
                  <img src={errorImage} alt="" />
                  <h1 className='text-danger'>Page Not Found</h1>
            </div>
      );
};

export default ErrorPage;