import React from 'react'
import "./Home.css";
import Carousel from '../../components/Home/Carousel/Carousel';
import ProductShowcase from '../../components/Home/ProductShowcase/ProductShowcase';

const Home = () => {
  return (
    <section className='home_section'>
        <Carousel />
        <ProductShowcase />
    </section>
  )
}

export default Home