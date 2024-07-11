import React, { useState, useEffect } from 'react';
import Header from './Header';
import backgroundImage from '../assets/background.jpg';
import Section from './Section';
import ContactForm from './ContactForm';
import { CareerForm } from './Career';
import Footer from './Footer';
const Home = () => {
  const [currentService, setCurrentService] = useState('web development');
  const services = ['web development', 'mobile app development', 'AI solutions'];

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      const nextIndex = (services.indexOf(currentService) + 1) % services.length;
      setCurrentService(services[nextIndex]);
    }, 2000); 
    return () => clearInterval(intervalId); 
  }, [currentService]); 

  return (
    <div className="relative h-screen"> 
      <div className="h-screen"> 
        <section
          className="absolute h-screen w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Header />
          <div className="container mx-auto flex items-center  h-screen">
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
              <p className="text-lg lg:text-3xl mb-8 ">We provide expert IT services in</p>
              <p className="text-blue-600 text-lg lg:text-6xl">{currentService}</p>
              <p className="text-lg lg:text-3xl mt-8 ">to elevate your business</p>
            </div>
          </div>
        </section>
      </div>
      <Section /> 
      <Footer/>

    </div>

  );
};

export default Home;