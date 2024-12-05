import React from 'react';

const sponsors = [
  {
    name: "Tech Solutions Inc",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
    type: "Platinum Sponsor"
  },
  {
    name: "Creative Arts Studio",
    logo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    type: "Gold Sponsor"
  },
  {
    name: "Gaming Hub",
    logo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    type: "Silver Sponsor"
  },
  {
    name: "Local Cafe",
    logo: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c",
    type: "Food Partner"
  }
];

export function Sponsors() {
  return (
    <div id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Our Sponsors</h2>
        <p className="text-center text-gray-600 mb-12">Proudly Supported By</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg text-purple-800">{sponsor.name}</h3>
              <p className="text-gray-600">{sponsor.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}