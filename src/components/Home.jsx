import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <h2 className='hhome'>Welcome to our E-commerce Website!</h2>
      <p className='phome'>
        Explore our wide range of products and enjoy a seamless shopping experience.
      </p>
    </div>
  );
};

export default Home;