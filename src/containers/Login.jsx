/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/imgs/google-icon.png';
import twitterIcon from '../assets/imgs/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Iniciar Sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar Sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='Checkbox' />
            Recuerdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia sesión con google
        </div>
        <div>
          <img src={twitterIcon} alt='Google' />
          Inicia sesión con twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'>Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
