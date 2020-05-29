import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/imgs/logo-platzi-video-BW2.png';
import userIcon from '../assets/imgs/icons8-usuario-círculo-64.png';

const Header = (props) => {
  const { user, isLoginHeader, isRegisterHeader, notFoundHeader } = props;
  const headerStyle = classNames('header', {
    isLoginHeader,
    isRegisterHeader,
    notFoundHeader,
  });
  const hasUser = Object.keys(user).length > 0;
  const handelLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className={headerStyle}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Logo' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='user' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}
          {hasUser ?
            <li><Link to='/' onClick={handelLogout}>Cerrar Seción</Link></li> :
            <li><Link to='/login'>Iniciar Seción</Link></li> }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispacthToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispacthToProps)(Header);
