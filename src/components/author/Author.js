import React from 'react';
import './Author.css';
import authorAvatar from '../../images/author/author-avatar.jpg';

function Author(){
  return (
    <section className="author content__author">
      <div className="author__person">
        <div className="author__vector"></div>
        <img className="author__avatar" src={authorAvatar} alt="Фотография автора"/>
        <h2 className="author__name">Марина Иванова</h2>
        <p className="author__profession">Фотограф</p>
        <a className="author__show-all">Показать больше информации о фотографе</a>
      </div>
      <div className="author__about">
        <h2 className="author__title">Об организаторе:</h2>
        <p className="author__subtitle">Всем привет! Я фотограф Мария! И по мимо фотосъемки 
          я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются 
          в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном 
          использовании и частных турах.
        </p>
        <p className="author__subtitle">
          Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, 
          которое соответствует бюджету и планам клиента. Мы никогда не зависим от субпоставщиков 
          и не свяжемся…
        </p>
        <a className="author__read-more">Читать еще</a>
        <h2 className="author__title">Что я предоставлю:</h2>
        <p className="author__subtitle">Встречу вас на машине после длительного перелёта. Качественный подбор места 
          и локации для вашей съемки. При необходимости всегда возможно прерваться 
          на обед/ужин. Более <span className="author__span">50</span> фотографий на выходе 
          с обработкой и замечательные впечатления о Дубае!
        </p>
        <a className="author__read-more">Читать еще</a>
      </div>
    </section>
  )
}

export default Author;