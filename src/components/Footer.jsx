import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {
  const { isLogin, isRegister } = props;
  const footerStyle = classNames('footer', {
    isLogin,
    isRegister,
  });

  return (
    <footer className={footerStyle}>
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
