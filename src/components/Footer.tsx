import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                Web Solutions <span className="text-secondary">Bihar</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering small businesses, shop owners, and startups in Bihar with affordable and professional digital solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Custom Web Apps</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>Patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>info@websolutionsbihar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            © {new Date().getFullYear()} Web Solutions Bihar. All rights reserved.
          </p>
          <p className="text-xs">
            Made with ❤️ for Bihar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
