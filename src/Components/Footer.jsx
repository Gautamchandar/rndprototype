import React from 'react';
import { Mail, Phone, MapPin, Globe, Leaf } from 'lucide-react';

// Footer Component 
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t-4 border-blue-500 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          
          {/* About what R & D */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="flex items-center text-2xl font-bold text-white mb-4">
              <span className="tracking-wide">R&D Scheme</span>
            </h3>
            {/* brief of r & d  */}
            <p className="text-sm leading-relaxed text-gray-400">
             <a href="#" className='underline'>Archive Sites</a>
            </p>
          </div>

          {/* Research Areas what i have coded */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Research Focus</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition duration-150">Indigenous Magnetic Resonance Imaging (IMRI)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">National Supercomputing Mission (NSM)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">High Performance Computing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">NaMPET-III</a></li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Institution</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition duration-150">Publications & Data</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">Partner With Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-150">Careers & Grants</a></li>
            </ul>
          </div>

          {/* Contact & Location of MeitY */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Help & Support</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-blue-600" />
                <span>Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi - 110003</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <a href="tel:+15551234567" className="hover:text-blue-400">(011) 2436 1756</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <a href="mailto:webmaster@meity.gov.in" className="hover:text-blue-400">webmaster@meity.gov.in</a>
              </p>
              <p className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-blue-600" />
                <a href="#" className="hover:text-blue-400">www.meity.gov.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Privacy details*/}
      <div className="bg-gray-800 py-4 border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 md:flex md:items-center md:justify-between">
          <p className="text-center md:text-left mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} R&D Scheme. All Rights Reserved. An Official Govt. Website.
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-white transition duration-150">Privacy Policy</a>
            {/* <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition duration-150">New Requests</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
