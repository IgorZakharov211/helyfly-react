import React from 'react';
import './Footer.css';
import logo from '../../images/logo.svg';
import vk from '../../images/vk.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import mc from '../../images/mc.svg';
import visa from '../../images/visa.svg';
import pp from '../../images/pp.svg';

function Footer(){
  return(
    <footer className="footer">
      <div className="footer__up-level">
        <a className="footer__link"><img className="footer__logo" src={logo} alt="Логотип"/></a>
        <ul className="footer__medias">
          <li className="footer__media"><a className="footer__media"><img className="footer__media-logo" src={vk} alt="Вконтакте"/></a></li>
          <li className="footer__media"><a className="footer__media"><img className="footer__media-logo" src={facebook} alt="Facebook"/></a></li>
          <li className="footer__media"><a className="footer__media"><img className="footer__media-logo" src={instagram} alt="Instagram"/></a></li>
        </ul>
      </div>
      <div className="footer__down-level">
        <ul className="footer__payments">
          <li className="footer__payment"><img className="footer__payment-img" src={mc} alt="Master Card"/></li>
          <li className="footer__payment"><img className="footer__payment-img" src={visa} alt="Visa"/></li>
          <li className="footer__payment"><img className="footer__payment-img" src={pp} alt="PayPal"/></li>
        </ul>
        <button className="footer__language">RU</button>
      </div>
      <p className="footer__copyright">Тех. поддержка: 8(800)700-00-00</p>
      <p className="footer__copyright">© 2021 HELYFLY. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;