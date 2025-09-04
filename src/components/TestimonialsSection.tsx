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
    <section className="testimonials">
      <h2 className="testimonialstitle">{title}</h2>
      <div className="testimonialsgrid">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
