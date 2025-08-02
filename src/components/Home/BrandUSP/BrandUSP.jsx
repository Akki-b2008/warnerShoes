import React from 'react';
import { motion } from 'framer-motion';
import './BrandUSP.css';
import { Hand, Footprints, Leaf } from 'lucide-react';

const uspData = [
  {
    icon: <Hand size={36} strokeWidth={2} />,
    title: 'Handcrafted',
    description: 'Each pair is carefully made by skilled artisans with absolute precision.',
  },
  {
    icon: <Footprints size={36} strokeWidth={2} />,
    title: 'Premium Comfort',
    description: 'Engineered with cushioned soles and soft lining for long-lasting comfort.',
  },
  {
    icon: <Leaf size={36} strokeWidth={2} />,
    title: 'Eco-Friendly',
    description: 'We use sustainable materials and processes to care for the planet.',
  },
];

const BrandUSP = () => {
  return (
    <section className="brand_usp_section">
      <h2 className="usp_heading">Why Choose Us</h2>
      <div className="usp_cards_wrapper">
        {uspData.map((usp, index) => (
          <motion.div
            key={index}
            className="usp_card"
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="usp_icon">{usp.icon}</div>
            <h3>{usp.title}</h3>
            <p>{usp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandUSP;
