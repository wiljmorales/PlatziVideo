import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <Header notFoundHeader />
    <section className='not-found'>
      <div className='not-found__container'>
        <div className='not-found__container--animation animated pulse'>404!!</div>
        <p>Pagina no encontrada</p>
      </div>
    </section>
    <Footer notFound />
  </>
);

export default NotFound;
