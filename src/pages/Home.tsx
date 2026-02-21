import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Zap, ShieldCheck, MessageSquare, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { SERVICES, TESTIMONIALS, PRICING, FAQS, CONTACT_INFO, PROJECTS } from '../constants';
import SEO from '../components/SEO';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home - Affordable Web Development in Bihar" 
        description="Web Solutions Bihar provides affordable website development, e-commerce solutions, and digital marketing for small businesses in Bihar. Starting at ₹14,999 (No domain)."
        keywords="web development bihar, website maker patna, affordable websites bihar, digital bihar, ecommerce bihar"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-blue-100 rounded-full"
              >
                #1 Digital Partner for Bihar Businesses
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold font-display text-slate-900 leading-tight mb-6"
              >
                Take Your <span className="text-primary">Bihar Business</span> <span className="text-secondary">Online</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
              >
                Affordable, professional, and easy-to-manage websites for shop owners, startups, and small businesses in Bihar. Starting at just ₹14,999 (No domain).
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-start gap-4"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" 
                  alt="Modern Web Interface" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-slate-700">Live Website</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Performance</p>
                    <p className="text-sm font-bold text-slate-900">99+ Score</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-display text-slate-400 uppercase tracking-widest">Our Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: 'React', color: 'text-[#61DAFB]' },
              { name: 'Next.js', color: 'text-black' },
              { name: 'React Native', color: 'text-[#61DAFB]' },
              { name: 'Node.js', color: 'text-[#339933]' },
              { name: 'Tailwind CSS', color: 'text-[#06B6D4]' },
              { name: 'TypeScript', color: 'text-[#3178C6]' }
            ].map((tech) => (
              <motion.div 
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div className={`text-2xl md:text-3xl font-bold font-display ${tech.color}`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple and effective digital solutions designed specifically for the local market of Bihar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {index === 0 && <Zap size={24} />}
                  {index === 1 && <Users size={24} />}
                  {index === 2 && <ShieldCheck size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-primary font-semibold text-sm flex items-center hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Why Choose Web Solutions Bihar?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Affordable Pricing', desc: 'High-quality websites at rates that fit the budget of small shop owners in Bihar.' },
                  { title: 'Local Expertise', desc: 'We understand the Bihar market and what local customers are looking for.' },
                  { title: 'Simple Language', desc: 'No heavy tech jargon. We explain everything in simple Hindi and English.' },
                  { title: 'Mobile First', desc: '90% of your customers use phones. We build websites that work perfectly on mobile.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" 
                alt="Our Technical Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Deliverables Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Recent Deliverables</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A showcase of our latest projects delivered to happy clients across Bihar and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      View Live Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-600">No hidden charges. Choose a plan that works for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border ${
                  plan.recommended ? 'border-primary shadow-2xl shadow-blue-100 relative' : 'border-slate-200'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className={`${plan.price === 'Contact Us' ? 'text-3xl' : 'text-4xl'} font-bold text-slate-900`}>{plan.price}</span>
                  {plan.price !== 'Contact Us' && <span className="text-slate-500 ml-1">/one-time</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-primary mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                    plan.recommended ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Clients Say</h2>
            <p className="text-slate-400">Trusted by local businesses across Bihar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Got questions? We've got answers.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Accordion 
                key={i} 
                elevation={0}
                sx={{ 
                  mb: 2, 
                  borderRadius: '16px !important',
                  '&:before': { display: 'none' },
                  border: '1px solid #f1f5f9',
                  backgroundColor: '#f8fafc'
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown size={20} />}
                  sx={{ px: 3, py: 1 }}
                >
                  <Typography sx={{ fontWeight: 700, fontFamily: 'Inter', color: '#0f172a' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography sx={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Join the digital revolution in Bihar today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Start Your Project Now
            </Link>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all flex items-center"
            >
              <MessageSquare className="mr-2" size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full opacity-20"></div>
      </section>
    </div>
  );
};

export default Home;
