import React from 'react';
import firstAvatar from '../images/reviews/firstAvatar.jpg';
import secondAvatar from '../images/reviews/secondAvatar.jpg';
import thirdAvatar from '../images/reviews/thirdAvatar.jpg';


const reviewsArr = [
  {
    id: 1,
    avatar: firstAvatar,
    name: 'Валерия Антонова',
    about: 'Арт-директор',
    stars: 5,
    subtitle: 'Супер! Я бы заказала съемку снова!',
    text: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
    date: '27 Апреля, 2019г.'
  },
  {
    id: 2,
    avatar: secondAvatar,
    name: 'Виталий Петров',
    about: 'Фотограф',
    stars: 5,
    subtitle: 'Супер! Я бы заказал съемку снова!',
    text: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!',
    date: '19 Апреля, 2019г.'
  },
  {
    id: 3,
    avatar: thirdAvatar,
    name: 'Джим Керри',
    about: '',
    stars: 5,
    subtitle: 'Супер! Я бы заказал съемку снова!',
    text: 'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
    date: '11 Апреля, 2019г.'
  }
]

export default reviewsArr;