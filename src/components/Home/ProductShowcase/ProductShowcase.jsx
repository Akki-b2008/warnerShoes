import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./ProductShowcase.css";
import LeatherShoes from "../../../assets/img/Leather_Shoes.png";

gsap.registerPlugin(ScrollTrigger);

const dummyProduct = [{
    name: 'X-TRAIL VINTAGE RUNNER',
    price: 179.99,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    imageUrl: LeatherShoes,
},
{
    name: 'FIRE EDGE HI-TOPS',
    price: 199.99,
    sizes: [7, 8, 9, 10, 11],
    imageUrl: LeatherShoes,
},
{
    name: 'BLACKOUT SNEAKER LUXE',
    price: 159.49,
    sizes: [6, 8, 9, 10, 12],
    imageUrl: LeatherShoes,
},
{
    name: 'STREET BLAZER 2.0',
    price: 129.95,
    sizes: [5, 6, 7, 8, 9, 10],
    imageUrl: LeatherShoes,
},
{
    name: 'LIMITLESS RIDER X',
    price: 189.00,
    sizes: [7, 8, 9, 10, 11, 12],
    imageUrl: LeatherShoes,
},
];

const splitText = (text) => {
  return text.split('').map((char, i) => (
    <motion.span
      key={i}
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ delay: i * 0.03, duration: 0.4 }}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
};


const ProductShowcase = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('.product_showcase');

        sections.forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, []);

    return (
        <section className="product_wrapper" ref={containerRef}>
            {dummyProduct.map((product, id) => (
                <motion.section
                    key={id}
                    className="product_showcase"
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "keyframes", stiffness: 200 }}
                >
                    <div className="product_left">
                        <h1>{splitText(product.name)}</h1>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <h2>SELECT SIZE</h2>
                        <div className="sizes">
                            {product.sizes.map((size) => (
                                <p key={size}>{size}</p>
                            ))}
                        </div>
                        <motion.button
                            className="add_to_cart_btn"
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Add to Cart
                        </motion.button>
                    </div>
                    <motion.div
                        className="product_right"
                        whileHover={{ rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img
                            src={product.imageUrl}
                            alt={product.name}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                </motion.section>
            ))}
        </section>
    );
};

export default ProductShowcase;