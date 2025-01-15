import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    university: "Harvard University",
    topics: [
      {
        id: "aws",
        name: "AWS Certification",
        description: "Prepare for AWS certifications with these MCQs.",
      },
      {
        id: "python",
        name: "Python Fundamentals",
        description: "Learn Python basics and advanced concepts.",
      },
    ],
  },
  {
    university: "Stanford University",
    topics: [
      {
        id: "javascript",
        name: "JavaScript Basics",
        description: "Master JavaScript with foundational MCQs.",
      },
      {
        id: "data-science",
        name: "Data Science Essentials",
        description: "Explore key concepts in data science.",
      },
    ],
  },
];

const Topics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">QuizCloud Topics</h1>
      {categories.map((category) => (
        <div key={category.university} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.university}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.topics.map((topic) => (
              <Link
                to={`/topics/${topic.id}`}
                key={topic.id}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-600">{topic.name}</h3>
                <p className="text-gray-700 mt-2">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
