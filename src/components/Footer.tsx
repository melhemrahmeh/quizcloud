// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} QuizCloud. All rights reserved.</p>
        <p className="text-sm mt-1">
          <a href="https://quizcloud.com" className="hover:underline" target="_blank" rel="noreferrer">
            quizcloud.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
