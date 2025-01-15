// src/pages/Dashboard.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import SessionTimeout from '../components/SessionTimeout';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to QuizCloud!</h1>
      {user && (
        <p className="text-xl mt-4">
          Hello, <span className="font-bold">{user.email}</span> 👋
        </p>
      )}
            <SessionTimeout />
    </div>
  );
};

export default Dashboard;
