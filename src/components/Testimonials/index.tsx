import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';
import { useAutoScroll } from './useAutoScroll';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setIsPaused } = useAutoScroll(containerRef);

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-purple-900/40 to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          Наши Отзывы
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Discover how ZAAVG is transforming the landscape of luxury through the experiences of our distinguished clients.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-hidden w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex animate-scroll min-w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;