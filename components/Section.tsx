import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, centered = false }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 relative ${className}`}>
      <div className={`max-w-7xl mx-auto relative z-10 ${centered ? 'text-center' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;