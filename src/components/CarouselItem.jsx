import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/imgs/icons8-play-64.png';
import plusIcon from '../assets/imgs/icons8-más-64.png';

const CarouselItem = ({ img }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={img} alt='woods walk' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--icon' src={playIcon} alt='' />
        <img className='carousel-item__details--icon' src={plusIcon} alt='' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16 +114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
