import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShoppingCart, Code, Settings, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={32} />;
      case 'ShoppingCart': return <ShoppingCart size={32} />;
      case 'Code': return <Code size={32} />;
      case 'Settings': return <Settings size={32} />;
      case 'Search': return <Search size={32} />;
      default: return <Globe size={32} />;
    }
  };

  return (
    <div className="pt-24">
      <SEO 
        title="Our Services - Website & E-commerce Development" 
        description="Explore our range of digital services including website development, e-commerce solutions, SEO, and maintenance for Bihar businesses."
      />
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We provide end-to-end digital solutions to help your business grow in the modern digital world.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-3xl font-bold font-display mb-4 text-slate-900">{service.title}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {service.description} We focus on creating value for your business by ensuring your online presence is strong, professional, and easy for your customers to use.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Customized for your needs',
                      'Mobile-friendly design',
                      'Fast loading speed',
                      'Easy to manage'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <CheckCircle2 size={18} className="text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-bold hover:underline"
                  >
                    Get a quote for this service <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-inner">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display mb-6">Not sure which service you need?</h2>
          <p className="text-slate-600 mb-10">
            Contact us for a free consultation. We'll listen to your business goals and suggest the best digital strategy for you.
          </p>
          <Link 
            to="/contact" 
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Get Free Advice
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
