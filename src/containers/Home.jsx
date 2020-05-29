/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals, search }) => {
  return (
    <>
      <Header />
      <Search isHome />

      {search.length > 0 && (
        <Categories title='Tu Busqueda'>
          <Carousel>
            {search.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
