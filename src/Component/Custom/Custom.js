import { useEffect, useState } from "react";

const Custom = (url) => {
      const [reviews, getReviews] = useState([]);

      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => getReviews(data.reviews))
      }, []);

      return reviews;
};

export default Custom;