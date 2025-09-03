import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  pic: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, role, pic }) => {
  return (
    <div className="testimonial">
      <div 
        className="testimonial-avatar" 
        style={{ 
          backgroundImage:`url(${pic})`,
          backgroundSize:"cover"
      }}
      ></div>
      <p className="testimonial-text" style={{
        fontWeight:"600"
      }}>{text}</p>
      <div className="testimonial-author">{author}</div>
      <div className="testimonial-role">{role}</div>
    </div>
  );
};

export default Testimonial;
