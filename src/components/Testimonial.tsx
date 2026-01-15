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
      <img 
        className="testimonial-avatar" 
        src={pic} 
        alt={author}
      />
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">{author}</div>
      <div className="testimonial-role">{role}</div>
    </div>
  );
};

export default Testimonial;