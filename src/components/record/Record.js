import React from 'react';
import './Record.css';
import Rating from '../rating/Rating';

function Record(){
  return(
    <section className="record content__record">
      <h2 className="record__title">Доступная съемка в ближайщее время</h2>
      <div className="record__box">
        <div className="record__row">
          <h3 className="record__date">Пятница, <span className="record__span">14</span> сентября</h3>
        </div>
        <div className="record__row">
          <ul className="record__ul">
            <li className="record__time">15:00 - 18:00</li>
            <li className="record__price">850$</li>
            <li className="record__space">Осталось — 1 место</li>
          </ul>
          <button className="record__button">Выбрать</button>
        </div>
        <div className="record__row">
          <ul className="record__ul">
            <li className="record__time">19:00 - 22:00</li>
            <li className="record__price">850$</li>
            <li className="record__space">Осталось — 1 место</li>
          </ul>
          <button className="record__button">Выбрать</button>
        </div>
        <Rating />
      </div>
    </section>
  );
}

export default Record;
