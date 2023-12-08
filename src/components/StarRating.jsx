import React, { useEffect, useState } from 'react';
import '../styles/star-rating.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        return (
          <span 
            key={index} 
            className={`${index+1<=rating ? "selected" : ""}`}
          >
            &#9733;
          </span>)
      })}
      

    </div>
  )
}

export default StarRating