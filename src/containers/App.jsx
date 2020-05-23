import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories title='Mi Lista'>
      <Carousel>
        <CarouselItem img='https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <CarouselItem img='https://images.pexels.com/photos/178996/pexels-photo-178996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/839303/pexels-photo-839303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/173392/pexels-photo-173392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/760637/pexels-photo-760637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </Carousel>
    </Categories>

    <Categories title='Tendencias'>
      <Carousel>
        <CarouselItem img='https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <CarouselItem img='https://images.pexels.com/photos/178996/pexels-photo-178996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/839303/pexels-photo-839303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/173392/pexels-photo-173392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/760637/pexels-photo-760637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </Carousel>
    </Categories>

    <Categories title='Originales de PlatziVideo'>
      <Carousel>
        <CarouselItem img='https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <CarouselItem img='https://images.pexels.com/photos/178996/pexels-photo-178996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/839303/pexels-photo-839303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/173392/pexels-photo-173392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/760637/pexels-photo-760637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <CarouselItem img='https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
