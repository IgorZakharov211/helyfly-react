import React from 'react';
import './Reviews.css';
import Review from '../review/Review';
import reviewsArr from '../../utils/reviewsArr';

function Reviews(){
  return(
    <section className="reviews content__reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <ul className="reviews__ul">{
        reviewsArr.map(({id, avatar, name, about, stars, subtitle, text, date}) => { 
          return <Review 
                  key={id} 
                  avatar={avatar} 
                  name={name} 
                  about={about} 
                  stars={stars}
                  subtitle={subtitle}
                  text={text}
                  date={date}/>
        })
      }
      </ul> 
    </section>
  )
}

export default Reviews;