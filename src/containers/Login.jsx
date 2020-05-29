/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/imgs/google-icon.png';
import twitterIcon from '../assets/imgs/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLoginHeader />
      <section className='login'>
        <section className='login__container'>
          <h2>Iniciar Sesión</h2>
          <form className='login__container--form' onSubmit={handleSumit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Iniciar Sesión</button>
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
            {' '}
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
      <Footer isLogin />
    </>
  );
};

const mapDispacthToProps = {
  loginRequest,
};

export default connect(null, mapDispacthToProps)(Login);
