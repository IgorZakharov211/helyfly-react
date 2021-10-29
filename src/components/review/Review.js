import React from 'react';
import './Review.css';
import fiveStars from '../../images/rating/five-stars.svg';

function Review(props){

  return(
    <li className="review">
      <img className="review__avatar" src={props.avatar} alt={`Аватар пользователя ${props.name}`}/>
      <h3 className="review__name">{props.name}</h3>
      <p className="review__about">{props.about}</p>
      <img className="review__stars" src={fiveStars} alt="Рейтинг - 5 звезд"/>
      <p className="review__subtitle">Супер! Я бы заказал{(props.gender === 'man' ? '' : 'а')} съемку снова!</p>
      <p className="review__text">{props.text}</p>
      <p className="review__date">{props.date}</p>
    </li>
  )
}

export default Review;