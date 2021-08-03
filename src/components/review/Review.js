import React from 'react';
import './Review.css';

function Review(props){
  return(
    <li className="review">
      <div className="review__user">
        <img className="review__avatar" src={props.avatar} alt={`Аватар пользователя ${props.name}`}/>
        <h3 className="review__name">{props.name}</h3>
        <p className="review__about">{props.about}</p>
        <img className="review__stars"/>
      </div>
      <p className="review__subtitle">{props.subtitle}</p>
      <p className="review__text">{props.text}</p>
    </li>
  )
}

export default Review;