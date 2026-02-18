import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="About Us - Our Mission for Digital Bihar" 
        description="Learn about Web Solutions Bihar, our mission to digitize local businesses, and our founder's vision for a tech-empowered Bihar."
      />
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Digitizing <span className="text-secondary">Bihar</span>, One Business at a Time
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            We are on a mission to empower local shop owners, startups, and small businesses in Bihar with affordable and world-class digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To bridge the digital divide in Bihar by providing high-quality web development and digital marketing services at prices that local businesses can afford. We want every small shop in Bihar to have its own digital identity.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-bold font-display mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To see a "Digital Bihar" where technology is used by every entrepreneur to grow their business, create jobs, and contribute to the state's economy. We envision being the most trusted digital partner for Bihar's growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/developer-bihar/600/600" 
                  alt="Founder - Full Stack Developer" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <p className="text-primary font-bold text-xl">2+ Years</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Meet the Founder</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Hi, I'm a Freelance Full Stack Developer based in Bihar. With over 2 years of experience in building modern web applications, I realized that many local businesses in our state are struggling to go digital because of high costs and complex technical jargon.
              </p>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                I started Web Solutions Bihar to solve this problem. My goal is to provide simple, affordable, and effective digital tools that help my fellow Bihari entrepreneurs succeed in the online world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-primary p-2 rounded-lg">
                    <Award size={20} />
                  </div>
                  <span className="font-semibold text-slate-700">Expert Dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-primary p-2 rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-semibold text-slate-700">10+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Happy Clients', value: '50+' },
              { label: 'Projects Done', value: '100+' },
              { label: 'Bihar Districts', value: '15+' },
              { label: 'Support Hours', value: '24/7' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">{stat.value}</p>
                <p className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
