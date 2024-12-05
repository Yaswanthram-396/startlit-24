// import React from 'react';
import { Clock, User } from 'lucide-react';
import { Link } from "react-router-dom"
interface ActivityCardProps {
  id:any;
  title: string;
  time: string;
  description: string;
  location: string;
  category: 'cultural' | 'sports' | 'technical' ;
  poc?: string;
  subPoc?: string;
}

const categoryColors = {
  cultural: 'bg-pink-100 text-pink-800',
  sports: 'bg-green-100 text-green-800',
  technical: 'bg-blue-100 text-blue-800',
  
};

export function ActivityCard({ id,title, time, description, location, category }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{time}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
            
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={`/activity/${id}`}>
        <button
            // href="#register"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Register Now
          </button>
          </Link>
      </div>
    </div>
  );
}