import React from 'react';
import './Features.css';
import FeaturesPreview from '../../images/features-preview.jpg';
import FeaturesTime from '../../images/features/features-time.svg';
import FeaturesPhoto from '../../images/features/features-photo.svg';
import FeaturesMappic from '../../images/features/features-mappic.svg';
import FeaturesAsq from '../../images/features/features-asq.svg';

function Features() {

  const featuresTitle = document.querySelector('.features__title');
  const firstColumn = document.querySelector('.features__first-column');
  const features = document.querySelector('.features');

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  function handleTabletChange(e) {
    console.log(featuresTitle)
    if (e.matches) {
      firstColumn.prepend(featuresTitle);
    } else {
      features.prepend(featuresTitle);
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  return(
    <section className="features content__features">
      <h2 className="features__title">Фотосессия в вертолете</h2>
      <div className="features__second-column">
        <img src={FeaturesPreview} alt="Превью к видео" className="features__preview" />
        { /*</img><iframe src="https://www.youtube.com/embed/MCT-ACqBFhE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="features__video"></iframe> */}
        <button className="features__button-play" type="button"></button>
      </div>
      <div className="features__first-column">
        <p className="features__subtitle">Полет на вертолете это прекрасная возможность получить новые ощущения! 
          А наш замечательный фотограф запечатлит лучшие моменты!</p>
        <ul className="features__items">
          <li className="features__item">
            <img src={FeaturesTime} alt="Значок времени" className="features__pic"/>
            <p className="features__text">3 часа съемки</p>
          </li>
          <li className="features__item">
            <img src={FeaturesPhoto} alt="Значок камеры" className="features__pic"/>
            <p className="features__text">Более 50 фотографий</p>
          </li>
          <li className="features__item">
            <img src={FeaturesMappic} alt="Значок маркера на карте" className="features__pic"/>
            <p className="features__text">Москва</p>
          </li>
          <li className="features__item">
            <img src={FeaturesAsq} alt="Значок сообщений" className="features__pic"/>
            <p className="features__text">Готовы ответить на любые вопросы</p>
          </li>
        </ul>
        <div className="rating">
          <p className="rating__text">Более<span className="rating__span">50</span>отзывов с оценкой </p>
          <div className="rating__pic"></div>
        </div>
      </div>
    </section>
  );
}

export default Features;