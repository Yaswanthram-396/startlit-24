import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold text-center mb-4 text-purple-900" style={{display:"flex", justifyContent:"center", borderBottom:"white"}}>Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">Have questions? Get in touch with our event coordinators</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-purple-50">
          <Instagram className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-gray-600">Instagram</h3>
            <a href = "https://www.instagram.com/starlit.niat?igsh=bTkwdDlzM3NiaHRx">
                     <p className='text-gray-600'> Starlit.niat </p>
            </a>
            <a href = "https://www.instagram.com/niat_india?igsh=YTEzaDJ1ejZmY2Z1">
                     <p className='text-gray-600'> niat_india </p>
            </a>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-purple-50">
            <Mail className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-gray-600">Email</h3>
            <p className="text-gray-600">freshers@niat.edu</p>
            <p className="text-gray-600">support@niat.edu</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-purple-50">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-gray-600">Venue</h3>
            <p className="text-gray-600">PV Conventions</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}