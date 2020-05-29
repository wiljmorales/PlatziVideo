import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchVideo }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    searchVideo(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input className={inputStyle} type='text' placeholder='Buscar...' onChange={handleInput} />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
