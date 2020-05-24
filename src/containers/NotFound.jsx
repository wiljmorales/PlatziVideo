import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className='not-found'>
      <div className='not-found__container'>
        <div className='not-found__container--animation animated pulse'>404!!</div>
        <p>Pagina no encontrada</p>
      </div>
    </section>
  </>
);

export default NotFound;
