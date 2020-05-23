import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/imgs/icons8-play-64.png';
import plusIcon from '../assets/imgs/icons8-más-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--icon' src={playIcon} alt='' />
        <img className='carousel-item__details--icon' src={plusIcon} alt='' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;
