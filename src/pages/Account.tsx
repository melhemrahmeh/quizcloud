import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updatePassword, updateEmail } from 'firebase/auth';

const Account: React.FC = () => {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleUpdateEmail = async () => {
    if (user) {
      try {
        await updateEmail(user, newEmail);
        setMessage('Email updated successfully.');
      } catch (err) {
        setMessage('Failed to update email. ' + (err as Error).message);
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (user) {
      try {
        await updatePassword(user, newPassword);
        setMessage('Password updated successfully.');
      } catch (err) {
        setMessage('Failed to update password. ' + (err as Error).message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Account Settings</h1>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Update Email</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleUpdateEmail}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Email
          </button>
        </div>

        <h2 className="text-xl font-bold text-gray-700 mt-6 mb-4">Update Password</h2>
        <div className="mb-4">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleUpdatePassword}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Password
          </button>
        </div>

        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Account;
