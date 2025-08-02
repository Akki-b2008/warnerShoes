import React from 'react'
import "./Home.css";
import Carousel from '../../components/Home/Carousel/Carousel';
import ProductShowcase from '../../components/Home/ProductShowcase/ProductShowcase';
import BrandUSP from '../../components/Home/BrandUSP/BrandUSP';
import BestSellers from '../../components/Home/BestSellers/BestSellers';

const Home = () => {
  return (
    <section className='home_section'>
        <Carousel />
        <ProductShowcase />
        <BrandUSP />
        <BestSellers />
    </section>
  )
}

export default Home