import React from 'react';
import "./Home.scss"
import ItemContainer from '../../components/ItemContainer';
import Slider from '../../components/Slider';
const Home = () => {
  return (
    <div className='home'>
      {/* <ItemContainer/> */}
      <Slider/>
    </div>
  )
}

export default Home