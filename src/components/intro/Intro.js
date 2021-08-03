import React from 'react';
import './Intro.css';

function Intro() {
  return(
    <section className="intro content__intro">
      <div className="intro__container">
  	  	<h1 className="intro__title">Эксклюзивная <span className="intro__span">фотосессия </span>при полете на вертолете</h1>
        <div className="intro__features"></div>
        <button className="intro__button">Забронировать место</button>
      </div>
  	</section>
  );
}

export default Intro;