import React from 'react';
import { Music, Gift, Utensils, Camera } from 'lucide-react';

export function Highlights() {
  const highlights = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Perfomances",
      description: "A Showcase of Talent, a Celebration of Art."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exciting Prizes",
      description: "The Thrill of Winning Starts Here."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Ramp Walk",
      description: "Where Style Meets The Spotlight."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Booth",
      description: "Snap it, Share it, Cherish it Forever."
    }
  ];

  return (
    <div id="highlights" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">Event Highlights</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="inline-block p-3 bg-purple-100 rounded-full text-purple-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}