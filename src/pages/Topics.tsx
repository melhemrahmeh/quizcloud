// src/pages/Topics.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  {
    id: "aws",
    name: "AWS Certification",
    description: "Prepare for AWS certifications with these MCQs.",
  },
  {
    id: "javascript",
    name: "JavaScript Basics",
    description: "Master JavaScript with foundational MCQs.",
  },
];

const Topics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">QuizCloud Topics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            to={`/topics/${topic.id}`}
            key={topic.id}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-blue-600">{topic.name}</h2>
            <p className="text-gray-700 mt-2">{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
