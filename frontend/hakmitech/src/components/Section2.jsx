import React from 'react';
import mobile from "../assets/mobile.png";

const Section2 = () => {
  return (
    <section
      className="h-6/7 w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: 'linear-gradient(0deg, #000000 0%, #036C9D 100%)',
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-4xl font-bold text-white text-center pb-5">
          Mobile App Development
        </h2>
        <div className="flex flex-col md:flex-row"> {/* Use flex-col for mobile */}
          <div className="w-full md:w-5/12 pr-6 mb-4 md:mb-0"> {/* Adjust margin for mobile */}
            <img src={mobile} alt="Image" className="w-full object-contain rounded-md" style={{ maxWidth: '400px', maxHeight: '600px' }} />
          </div>
          <div className="w-full md:w-5/12 pl-0 md:pl-4"> {/* Remove margin for mobile */}
            <h3 className="text-2xl font-semibold mb-4 text-white">
              User-Friendly Solutions
            </h3>
            <p className="text-lg text-gray-300">
              Our solutions are designed to be user-friendly, ensuring that your customers have a seamless experience. We believe that technology should be intuitive and easy to use, which is why we focus on creating solutions that are both powerful and easy to navigate.
            </p>
            <p className="text-lg text-gray-300">
              Our team of experts has years of experience in designing and developing user-friendly solutions that meet the needs of our clients. We take the time to understand your business goals and objectives, and work with you to create a solution that meets your needs.
            </p>
            <ul className="list-none mb-4">
              <li className="flex items-center mb-2">
                <i className="fas fa-check-circle text-green-400 mr-2"></i> Easy to use
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check-circle text-green-400 mr-2"></i> Intuitive interface
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-check-circle text-green-400 mr-2"></i> Customizable solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
