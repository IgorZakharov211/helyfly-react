import React from 'react';
import './Reviews.css';
import Review from '../review/Review';
import reviewsArr from '../../utils/reviewsArr';

function Reviews(){
  return(
    <section className="reviews content__reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <ul className="reviews__ul">{
        reviewsArr.map(({id, avatar, name, about, gender, text, date}) => { 
          return <Review 
                  key={id} 
                  avatar={avatar} 
                  name={name} 
                  about={about} 
                  gender={gender}
                  text={text}
                  date={date}/>
        })
      }
      </ul> 
      <button className="review__more">Показать Все ({reviewsArr.length})</button>
    </section>
  )
}

export default Reviews;