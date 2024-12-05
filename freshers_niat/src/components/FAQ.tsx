import React from 'react';

const faqs = [
  {
    question: "What is the Dress code ?",
    answer: "Starlit Event dress code is inspired by Tollywood trends from 2010 to 2024." 
  },
  {
    question: "What is the event duration ?",
    answer: "Total duration of the event will be 6 hours starting from 12PM to 6PM."
  },
  {
    question: "Can you participate in multiple activities ?",
    answer: "No, a single student can only participate in only one activity."
  },
  {
    question: "Is there an entry fee ?",
    answer: "No, The event is only conducted for students."
  }
];

export function FAQ() {
  return (
    <div id="faq" className="py-20 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-purple-900">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12">Got questions? We've got answers!</p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-purple-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}