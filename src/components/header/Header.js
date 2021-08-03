import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import userLink from '../../images/user-link.svg';

function Header(){
  return(
    <header className="header app-page__header">
  	  <img className="header__logo" src={logo} alt="Логотип" />
      <p className="header__city-link">Москва</p>
      <a className="header__user-link"><img alt="Иконка пользователя" src={userLink} /></a>
      <p className="header__telephone-number">Телефон: <span className="header__span">8(800)-123-12-12 </span></p>
  	</header>
  );
}

export default Header;