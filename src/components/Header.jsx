import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='../src/assets/imgs/logo-platzi-video-BW2.png' alt='Logo' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../src/assets/imgs/icons8-usuario-círculo-64.png' alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Seción</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
