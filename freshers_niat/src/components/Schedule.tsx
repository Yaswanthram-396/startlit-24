import React from 'react';

export function Schedule() {
  const events = [
    { time: "6:00 PM", event: "Welcome Reception" },
    { time: "6:30 PM", event: "Opening Ceremony" },
    { time: "7:00 PM", event: "Cultural Performances" },
    { time: "8:00 PM", event: "Dinner & Networking" },
    { time: "9:00 PM", event: "DJ Night" },
    { time: "11:00 PM", event: "Closing Ceremony" }
  ];

  return (
    <div id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className=" font-bold text-center mb-12 text-purple-800">Event Schedule</h1>        
        <div className="grid gap-4">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
            >
              <div className="w-24 text-purple-600 font-bold">{item.time}</div>
              <div className="flex-1 text-gray-800 text-lg">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}