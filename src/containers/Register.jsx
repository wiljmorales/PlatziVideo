import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='registro'>
    <section className='registro__container'>
      <h2>Regístrate</h2>
      <form className='registro__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarse</button>
      </form>
      <div className='registro__container--iniciar-secion'>
        <p>¿Ya tienes cuenta?</p>
        <Link to='/login'>Inicia Sesión</Link>
      </div>
    </section>
  </section>
);

export default Register;
