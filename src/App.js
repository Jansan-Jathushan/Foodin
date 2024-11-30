import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBagIcon, 
  ChevronRightIcon, 
  CheckIcon 
} from 'lucide-react';
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Dribbble, 
  Instagram 
} from 'lucide-react';

// Images (ensure these are in your src/images folder)
import LogoImg from './logo.jpg';
import HeroImg from './bg-1.jpg';
import AboutImg from './img-1.png';
import BackgroundImg from './img-2.png';
import MenuItem1 from './img-3.jpg';
import MenuItem2 from './img-4.jpg';
import MenuItem3 from './img-5.jpg';
import ReviewBg from './bg-2.jpg';
import ContractBg from './bg-3.jpg';

const FoodWebsite = () => {
  const [email, setEmail] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleEmailSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const menuItems = [
    {
      image: MenuItem1,
      name: 'Rainbow Vegetable Sandwich',
      time: 'Time 15 - 20 Minutes | Serves:1',
      price: 400.00,
      originalPrice: 500.00,
      description: 'A colorful and nutritious sandwich packed with fresh vegetables.'
    },
    {
      image: MenuItem2,
      name: 'Vegetable Burger',
      time: 'Time 30 - 45 Minutes | Serves:1',
      price: 600.00,
      originalPrice: 800.00,
      description: 'Delicious veggie burger with a mix of healthy ingredients.'
    },
    {
      image: MenuItem3,
      name: 'Raspberry French Toast',
      time: 'Time 10 - 20 Minutes | Serves:1',
      price: 1000.00,
      originalPrice: 1300.00,
      description: 'Sweet and indulgent French toast filled with fresh raspberries.'
    }
  ];

  return (
    <div className="font-['Poppins'] text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white/90 backdrop-blur-md flex justify-between items-center px-10 py-4 z-50 shadow-md"
      >
        <div className="logo">
          <motion.img 
            src={LogoImg} 
            alt="Logo" 
            whileHover={{ scale: 1.1 }}
            className="h-12 w-12 rounded-full ml-12 cursor-pointer" 
          />
        </div>
        <ul className="flex items-center space-x-6">
          {['Home', 'About', 'Explore', 'Reviews', 'FAQ'].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-primary uppercase font-semibold hover:text-secondary-dark transition"
              >
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-primary text-white px-4 py-2 rounded uppercase hover:bg-secondary-dark transition">
              <a href="/login" className="text-white">Login</a>
            </button>
          </motion.li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        id="home" 
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="text-center text-white z-10 px-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-4 tracking-tight drop-shadow-lg"
          >
            BRINGING THE WORLD TO YOUR KITCHEN
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 max-w-md mx-auto text-xl font-light tracking-wide"
          >
            Experience the world through food - great taste starts here
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-secondary-dark transition"
            >
              Order Now <ShoppingBagIcon className="inline ml-2" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Learn More <ChevronRightIcon className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <section id="about" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto space-y-16">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={AboutImg}
              alt="Delicious Food"
              className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
              We Pride Ourselves On <br />
              Making Real Food From The <br />
              Best Ingredients.
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the world through food. Great taste starts here.
            </p>
            <button className="mt-10 px-6 py-3 bg-primary text-white rounded-lg shadow-md font-primary hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="absolute inset-0 bg-green-100 md:bg-gradient-to-r from-green-100 to-green-200 rounded-xl -z-10"></div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-relaxed">
              We make everything <br />
              by hand with the <br />
              best possible <br />
              ingredients.
            </h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ratione a accusamus voluptas tenetur eligendi temporibus
              reprehenderit, asperiores expedita aspernatur nobis tempora
              veritatis in nam aliquid deleniti similique accusantium ipsam?
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <i className="fa-solid fa-check text-green-500 mr-3"></i>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-green-500 mr-3"></i>
                Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-check text-green-500 mr-3"></i>
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
            <button className="mt-10 px-6 py-3 bg-primary text-white rounded-lg shadow-md font-primary hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={BackgroundImg}
              alt="Delicious Food"
              className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
      

      {/* Menu Items Section with Hover Effect */}
      <section id="explore" className="py-20 text-center bg-gray-50">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-secondary-dark mb-4"
        >
          Explore Our Foods
        </motion.h2>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-600 mb-10"
        >
          Discover our carefully crafted menu, designed to tantalize your taste buds
        </motion.p>
        <div className="flex justify-center space-x-6">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveMenuItem(index)}
              onHoverEnd={() => setActiveMenuItem(null)}
              className={`w-72 border rounded-lg p-4 bg-white shadow-lg transform transition-all duration-300 
                ${activeMenuItem === index ? 'scale-105 shadow-2xl' : ''}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-t-lg mb-4 transition-transform" 
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-secondary-dark">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.time}</p>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-primary font-bold text-lg mr-2">${item.price.toFixed(2)}</span>
                    <span className="text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition"
                  >
                    Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section
      id="reviews"
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${ReviewBg})`, // Replace with your image path
      }}
    >
      <div
        className="bg-opacity-70 text-center text-primary p-8 animate-fadeInUp"
      >
        <h1 className="text-5xl md:text-7xl font-black font-primary mb-20">
          When a man's stomach is full it <br /> makes no difference whether he
          is <br /> rich or poor.
        </h1>
        <p className="text-text-gray text-3xl font-secondary mt-2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          corrupti architecto labore maiores recusandae, dolor et, consequatur
          fugiat fuga ipsam consequuntur consectetur modi. Quod qui maxime animi
          soluta eveniet! Qui?
        </p>
        <button className="mt-10 px-6 py-3 bg-primary text-white rounded-lg shadow-md font-primary hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
          Read More
        </button>
      </div>
    </section>

    <section
      id="faq"
      className="py-16  bg-cover bg-center text-white"
      >
 
 <div className="bg-secondary-dark bg-cover bg-center bg-fixed py-16 px-6"
      style={{
        backgroundImage: `url(${ContractBg})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg mx-auto max-w-4xl text-center text-white space-y-6 shadow-lg ">
      <p className="text-4xl font-bold text-white mb-4 ">
          Bake fresh daily by bakers with passion
          
        </p>
      </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-black bg-opacity-60 p-10 rounded-lg mx-auto max-w-3xl text-center shadow-lg mt-8 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed font-primary">
          Hurry up! Subscribe to our <br />
          Newsletter and get 25% off
        </h1>
        <p className="text-text-gray text-lg font-secondary mb-8">
          Limited time offer for this month. No credit card required.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Email Address Here"
            className="w-2/3 px-4 py-2 rounded-lg font-secondary text-black"
            required
          />
          <button
            type="button"
            className="px-6 py-2 bg-primary text-white rounded-lg font-primary hover:bg-opacity-90 transition duration-300 shadow-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
    
      {/* Rest of the sections remain similar, with added motion animations */}
      {/* ... (previous footer and other sections with similar motion animations) */}
      <footer className="bg-primary text-white py-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 space-x-4"
        >
          {['Register', 'Form', 'Affiliate', 'FAQ'].map((link, index) => (
            <motion.a 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`/${link.toLowerCase()}`} 
              className="hover:text-gray-200 transition"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-6"
        >
          {[Facebook, Twitter, Youtube, Linkedin, Dribbble, Instagram].map((Icon, index) => (
            <motion.a 
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="text-white hover:text-gray-200 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
        <p className="text-sm opacity-70">&copy; 2024 by Loshavii Arulramesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FoodWebsite;