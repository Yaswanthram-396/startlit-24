import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    caption: "Previous Year Celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    caption: "Cultural Performances"
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    caption: "Tech Events"
  },
  {
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    caption: "Group Activities"
  },

  {
    url: "https://images.unsplash.com/photo-1496024840928-4c417adf211d",
    caption: "Campus Life"
  }
];

export function Gallery() {
  return (
    <div id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Gallery</h2>
        <p className="text-center text-gray-600 mb-12">Glimpses of Previous Year's Celebrations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}