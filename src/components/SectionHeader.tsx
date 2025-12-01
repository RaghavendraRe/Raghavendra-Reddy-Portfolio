import React from 'react';



interface SectionHeaderProps {

  title: string;

  subtitle: string;

  centered?: boolean;

}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {

  return (

    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>

      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">

        {title}

        <span className="text-accent">.</span>

      </h2>

      <div className={`h-1 w-20 bg-accent rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>

      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">

        {subtitle}

      </p>

    </div>

  );

};

export default SectionHeader;

