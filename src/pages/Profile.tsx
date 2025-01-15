import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const progress = {
    completedQuizzes: 12,
    averageScore: 85,
    topicsAttempted: 5,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Account Details</h2>
        {user ? (
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Account Created:</strong> {new Date(user.metadata.creationTime || '').toLocaleDateString()}
            </li>
            <li>
              <strong>Last Sign-In:</strong> {new Date(user.metadata.lastSignInTime || '').toLocaleDateString()}
            </li>
          </ul>
        ) : (
          <p className="text-gray-600">No user information available.</p>
        )}

        <h2 className="text-xl font-bold text-gray-700 mt-6 mb-4">Quiz Progress</h2>
        <ul className="text-gray-600 space-y-2">
          <li>
            <strong>Completed Quizzes:</strong> {progress.completedQuizzes}
          </li>
          <li>
            <strong>Average Score:</strong> {progress.averageScore}%
          </li>
          <li>
            <strong>Topics Attempted:</strong> {progress.topicsAttempted}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
