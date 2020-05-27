import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/imgs/icons8-play-64.png';
import plusIcon from '../assets/imgs/icons8-más-64.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handelSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--icon'
            src={playIcon}
            alt=''
          />
          <img
            className='carousel-item__details--icon'
            src={plusIcon}
            alt=''
            onClick={handelSetFavorite}
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} min`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
