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
        {filteredActivities.map((activity, index) => {
  const { id, title, time, description, location, category, poc, subPoc } = activity;
  if (
    category === "sports" ||
    category === "cultural" ||
    category === "technical"
  ) {
    return (
      <ActivityCard
        key={index}
        id={id}
        title={title}
        time={time}
        description={description}
        location={location}
        category={category}
        poc={poc}
        subPoc={subPoc}
      />
    );
  }
  return null; // Skip if the category does not match the expected types
})}

        </div>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { Clock, MapPin, User } from 'lucide-react';
// import { Link } from "react-router-dom";

// // Define a strict interface for activity
// interface Activity {
//   id: string;
//   title: string;
//   time: string;
//   description: string;
//   location: string;
//   category: 'sports' | 'cultural' | 'technical';
//   poc: string;
//   subPoc: string;
// }

// // Define the props for ActivityCard
// interface ActivityCardProps extends Activity {}

// // ActivityCard Component
// export function ActivityCard({
//   id,
//   title,
//   time,
//   description,
//   location,
//   category,
//   poc,
//   subPoc
// }: ActivityCardProps) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-4">
//           <span className={`px-3 py-1 rounded-full text-xs font-bold 
//             ${
//               category === 'sports' 
//                 ? 'bg-green-100 text-green-800' 
//                 : category === 'cultural' 
//                 ? 'bg-purple-100 text-purple-800' 
//                 : 'bg-blue-100 text-blue-800'
//             }`}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </span>
//           <div className="flex items-center text-gray-500">
//             <Clock className="w-4 h-4 mr-2" />
//             <span>{time}</span>
//           </div>
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
        
//         <div className="flex items-center text-gray-500 mb-2">
//           <MapPin className="w-4 h-4 mr-2" />
//           <span>{location}</span>
//         </div>
        
//         <div className="flex items-center text-gray-500">
//           <User className="w-4 h-4 mr-2" />
//           <span>POC: {poc} {subPoc && `(${subPoc})`}</span>
//         </div>
        
//         <Link 
//           to={`/activity/${id}`} 
//           className="mt-4 block text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Main ActivitiesSection Component
// export function ActivitiesSection() {
//   // Sample activities data (replace with your actual data)
//   const activities: Activity[] = [
//     {
//       id: "indoor-games",
//       title: "Indoor Games Extravaganza",
//       time: "10:00 AM - 12:00 PM",
//       description: "Exciting indoor games and competitions for all participants.",
//       location: "Main Hall",
//       category: "sports",
//       poc: "John Doe",
//       subPoc: "Sports Coordinator"
//     },
//     // Add more activities here...
//   ];

//   const [filter, setFilter] = useState<'all' | 'sports' | 'cultural' | 'technical'>('all');

//   const filteredActivities = activities.filter(
//     activity => filter === 'all' || activity.category === filter
//   );

//   return (
//     <div id="activities" className="py-20 bg-gray-50">
//       <div 
//         className="max-w-7xl mx-auto px-4" 
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Event Schedule</h2>
//         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//           A full day of exciting activities, competitions, and celebrations!
//         </p>

//         <div className="flex justify-center gap-4 mb-12 flex-wrap">
//           {['all', 'sports', 'cultural', 'technical'].map((category) => (
//             <button
//               key={category}
//               onClick={() => setFilter(category as 'all' | 'sports' | 'cultural' | 'technical')}
//               className={`px-4 py-2 rounded-full ${
//                 filter === category
//                   ? 'bg-purple-600 text-white'
//                   : 'bg-white text-purple-600 hover:bg-purple-50'
//               } transition-colors`}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredActivities.map((activity) => (
//             <ActivityCard 
//               key={activity.id}
//               {...activity}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }