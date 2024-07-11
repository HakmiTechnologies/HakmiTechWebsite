import React, { useState, useEffect } from 'react';
import mobile from "../assets/mobile.png";
import Section2 from './Section2';
import Section3 from './Section3';
import ContactForm from './ContactForm';
import Blogs from './Blogs';
import TechNews from './TechNews';

const Section = () => {
  const [currentSection, setCurrentSection] = useState('Section2');
  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = ['Section2', 'Section3'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSectionIndex((sectionIndex + 1) % sections.length);
      setCurrentSection(sections[sectionIndex]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [sectionIndex, sections]);

  const handleSectionChange = (index) => {
    setSectionIndex(index);
    setCurrentSection(sections[index]);
  };

  return (
    <>
     <section
  className="h-screen w-screen bg-cover bg-center relative overflow-y-auto	"
  style={{
    backgroundImage: 'linear-gradient(0deg, #026e9f 0%, #0c1a28 100%)',
  }}
>
  <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 text-center">
    <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-white">
      Upgrade Your Product
    </h2>
    <p className="text-lg lg:text-2xl mb-8 text-white">
      Take your product to the next level with our cutting-edge technology solutions.
    </p>
          <div className="flex flex-col gap-4 md:flex-row"> {/* Use flex-col and gap-4 for mobile */}
      <div className="card hover:box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2) transition duration-300 ease-in-out">
        <div className="bg-transparent border-2 border-white hover:bg-blue-700 hover:border-transparent rounded-md shadow-md p-4 mr-4">
          <i className="fa fa-laptop text-4xl text-blue-400 mb-4"></i>
          <h5 className="text-lg font-semibold mb-2 text-white">Web App Development</h5>
          <p className="text-gray-300">Our custom web development services encompass both front-end and back-end solutions. Whether you require enhancements to
            existing applications or the creation of new, scalable web solutions, our team is equipped with expertise and creativity.</p>
        </div>
      </div>

      <div className="card hover:box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2) transition duration-300 ease-in-out">
        <div className="bg-transparent border-2 border-white hover:bg-blue-700 hover:border-transparent rounded-md shadow-md p-4 mr-4">
          <i className="fa fa-android text-4xl text-green-400 mb-4"></i>
          <h5 className="text-lg font-semibold mb-2 text-white">Mobile App Development</h5>
          <p className="text-gray-300">We specialize in developing mobile applications across various platforms, ensuring seamless performance and engaging user experiences. Our team leverages a diverse range of
            technologies to deliver tailored solutions that align with your business goals.</p>
        </div>
      </div>
      <div className="card hover:box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2) transition duration-300 ease-in-out">
        <div className="bg-transparent border-2 border-white hover:bg-blue-700 hover:border-transparent rounded-md shadow-md p-4">
          <i className="fa fa-cogs text-4xl text-orange-300 mb-4"></i>
          <h5 className="text-lg font-semibold mb-2 text-white">AI Solutions</h5>
          <p className="text-gray-300">Our AI services optimize business operations with advanced technologies like machine learning, natural language processing,
            and predictive analytics. We develop tailored AI solutions
            to ensure your business stays ahead in the digital landscape.</p>
        </div>
      </div>
    </div>
    <button className="bg-slate-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </div>
</section>

      <div className="flex justify-center">
        {currentSection === 'Section2' && <Section2 />}
        {currentSection === 'Section3' && <Section3 />}
      </div>

      <div className="flex justify-center bg-black mx-auto">
        {sections.map((section, index) => (
          <div key={index} onClick={() => handleSectionChange(index)} className="mr-4">
            <div
              className={`bg-white rounded-full w-4 h-4 cursor-pointer ${index === sectionIndex ? 'bg-blue-700' : ''}`}
            />
          </div>
        ))}
      </div>
      <div>
        <Blogs />
        <TechNews/>
      </div>

    </>
  );
};

export default Section;