import React from 'react';



import SectionHeader from './SectionHeader';

import { ExternalLink } from 'lucide-react';

import { motion } from 'framer-motion';

const certificates = [

  {

    id: 1,

    title: "Outstanding Performance – AI Agents & Cloud Technologies (Google Developer Groups)",

    issuer: "Google Developer Groups",

    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",

    link: "https://github.com/RaghavendraRe/My-Certificates/blob/main/certificates/Raghavendra%20Reddy%20T_certificate_s10%20(1).jpeg"

  },

  {

    id: 2,

    title: "Advanced Data Science with Python",

    issuer: "NASSCOM",

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",

    link: "https://github.com/RaghavendraRe/My-Certificates/blob/main/certificates/nasscom%20certificate.pdf"

  },

  {

    id: 3,

    title: "SQL Certification",

    issuer: "HackerRank",

    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",

    link: "https://github.com/RaghavendraRe/My-Certificates/blob/main/certificates/sql_basic%20certificate.pdf"

  },

  {

    id: 4,

    title: "Power BI Data Analyst Associate",

    issuer: "Microsoft (In Progress)",

    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"

  }

];

const Certificates: React.FC = () => {

  return (

    <section id="certificates" className="py-24 bg-muted">

      <div className="container mx-auto px-6">

        <SectionHeader

          title="Certificates"

          subtitle="Explore my certifications — technical & others."

        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (

            <motion.div

              key={cert.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ delay: index * 0.1 }}

              viewport={{ once: true }}

              className="card-gradient rounded-2xl overflow-hidden border border-primary/20 group hover:border-primary hover:glow-primary transition-all duration-500"

            >

              <div className="relative h-48 overflow-hidden bg-white/5 p-4 flex items-center justify-center">

                <img

                  src={cert.image}

                  alt={cert.title}

                  className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"

                />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">

                  {cert.title}

                </h3>

                <p className="text-sm text-muted-foreground mb-6">{cert.issuer}</p>

                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="px-4 py-2 gradient-primary text-white text-sm font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-500 glow-primary">

                    <ExternalLink size={14} />

                    View

                  </a>
                ) : (
                  <button className="px-4 py-2 gradient-primary text-white text-sm font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-500 glow-primary opacity-50 cursor-not-allowed">

                    <ExternalLink size={14} />

                    View

                  </button>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Certificates;

