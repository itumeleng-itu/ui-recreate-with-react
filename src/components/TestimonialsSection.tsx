import React from 'react';
import Testimonial from './Testimonial';

type TestimonialData ={
  text: string;
  author: string;
  role: string;
  pic: string;
}

type TestimonialsSectionProps ={
  title?: string;
  testimonials: TestimonialData[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  title = "Client Testimonials", 
  testimonials 
}) => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">{title}</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
