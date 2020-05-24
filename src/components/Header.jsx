import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/imgs/logo-platzi-video-BW2.png';
import userIcon from '../assets/imgs/icons8-usuario-círculo-64.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Logo' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><Link to='/login'>Iniciar Seción</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
