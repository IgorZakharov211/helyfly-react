import React from 'react';
import './Place.css';
import PlaceAvatar from '../../images/author/author-avatar.jpg'

function Place(){
  return(
    <section className="place content__place">
      <div className="place__info">
        <div className="place__slider">
          <button className="place__prev"></button>
          <ul className="place__ul">
            <li className="place__ins">
              <div className="place__vektor">1</div>
              <h2 className="place__title">Где встречаемся?</h2>
              <p className="place__subtitle">Москва</p>
            </li>
            <li className="place__ins">
              <div className="place__vektor">2</div>
              <h2 className="place__title">Время съемки</h2>
              <p className="place__subtitle">3 часа</p>
            </li>
            <li className="place__ins">
              <div className="place__vektor">3</div>
              <h2 className="place__title">Мест осталось:</h2>
              <p className="place__subtitle">2 места</p>
            </li>
          </ul>
          <button className="place__next"></button>
        </div>
        <div className="place__photographer">
          <img className="place__avatar" alt="Фотография фотографа" src={PlaceAvatar} />
          <h2 className="place__name">Мария Иванова</h2>
          <p className="place__about">Фотограф</p>
          <a className="place__more">Показать больше информации</a>
        </div>
      </div>
    </section>
  );
}

export default Place;