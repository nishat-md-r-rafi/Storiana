import React from 'react';
import "./Home.scss"
import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
const Home = () => {
  return (
    <div className='home'>
      {/* <ItemContainer/> */}
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home