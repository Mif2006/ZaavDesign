import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';
import { useCarousel } from './hooks/useCarousel';

const Services = () => {
  const {
    currentIndex,
    isRotating,
    setIsRotating,
    calculateCardStyle,
    rotateToIndex,
  } = useCarousel(services.length);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience the future of luxury through our innovative services and technologies.
        </p>
      </div>

      <div
        className="relative w-screen perspective-1000"
        onMouseEnter={() => setIsRotating(false)}
        onMouseLeave={() => setIsRotating(true)}
      >
        <div
          className="relative h-[600px] transform-style-3d"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '2000px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={calculateCardStyle(index)}
            >
              <ServiceCard
                {...service}
                onClick={() => rotateToIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;