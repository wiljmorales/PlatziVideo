import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='woods walk' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--icon' src='../src/assets/imgs/icons8-play-64.png' alt='' />
        <img className='carousel-item__details--icon' src='../src/assets/imgs/icons8-más-64.png' alt='' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16 +114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
