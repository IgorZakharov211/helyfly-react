import React from 'react';
import './Rating.css';

function Rating(){
  return(
    <div className="rating rating_border_none record__rating">
      <p className="rating__text">Более<span className="rating__span">50</span>отзывов с оценкой </p>
      <div className="rating__pic"></div>
    </div>
  );
}

export default Rating;