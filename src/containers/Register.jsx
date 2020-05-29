import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleImput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegisterHeader />
      <section className='registro'>
        <section className='registro__container'>
          <h2>Regístrate</h2>
          <form className='registro__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleImput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleImput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleImput}
            />
            <button
              className='button'
              type='submit'
            >
              Registrarse
            </button>
          </form>
          <div className='registro__container--iniciar-secion'>
            <p>¿Ya tienes cuenta?</p>
            <Link to='/login'>Inicia Sesión</Link>
          </div>
        </section>
      </section>
      <Footer isRegister />
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
