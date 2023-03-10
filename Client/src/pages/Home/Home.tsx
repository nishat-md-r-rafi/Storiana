import React from 'react';
import "./Home.scss"
import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <div className='home'>
      {/* <ItemContainer/> */}
      <Slider/>
      <Categories/>
      <Products />
    </div>
  )
}

export default Home