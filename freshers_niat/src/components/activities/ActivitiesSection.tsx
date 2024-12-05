import React, { useState } from 'react';
import { ActivityCard } from './ActivityCard';
import { activities } from '../../data/activities';

export function ActivitiesSection() {
  const [filter, setFilter] = useState<'all' | 'sports' | 'cultural' | 'technical' >('all');

  const filteredActivities = activities.filter(
    activity => filter === 'all' || activity.category === filter
  );

  return (
    <div id="activities" className="py-20 bg-gray-50" >
      <div className="max-w-7xl mx-auto px-4" style={{    display: "flex"
      ,
          flexDirection: "column",
          alignItems: "center",}}>
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Event Schedule</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          A full day of exciting activities, competitions, and celebrations!
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'sports', 'cultural', 'technical'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 hover:bg-purple-50'
              } transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
}