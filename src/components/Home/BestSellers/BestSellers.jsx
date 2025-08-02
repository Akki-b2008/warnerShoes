import React, { useRef, useEffect } from 'react';
import './BestSellers.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import LeatherShoes from "../../../assets/img/Leather_Shoes.png";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Urban Drift',
    price: '₹3,499',
    description: 'Elevated street style meets all-day comfort.',
    image: LeatherShoes,
  },
  {
    name: 'Desert Vibe',
    price: '₹2,999',
    description: 'Crafted suede upper with desert-toned color palette.',
    image: LeatherShoes,
  },
  {
    name: 'Cloud Runner',
    price: '₹3,799',
    description: 'Soft foam cushioning, built for momentum.',
    image: LeatherShoes,
  },
];

const TrendingPicks = () => {
  const sectionRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray('.trending_panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${containerRef.current.offsetWidth}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="trending_section" ref={sectionRef}>
      <div className="trending_inner" ref={containerRef}>
        {products.map((product, i) => (
          <div className="trending_panel" key={i}>
            <div className="trending_content">
              <motion.div
                className="trending_left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>{product.price}</span>
              </motion.div>
              <motion.div
                className="trending_right"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img src={product.image} alt={product.name} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPicks;