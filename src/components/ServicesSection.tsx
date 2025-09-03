import React from 'react';
import ServiceCard from './ServiceCard';

type Service = {
  title: string;
  text: string;
  pic: string;
};

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="services-section">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} text={service.text} pic={service.pic} />
      ))}
    </section>
  );
};

export default ServicesSection;
