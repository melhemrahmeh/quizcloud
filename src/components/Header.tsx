// src/components/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const Header: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/signin');
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">QuizCloud</Link>
        <nav className="space-x-4">
            {user ? (
                <>
                <Link to="/" className="hover:underline">Dashboard</Link>
                <Link to="/profile" className="hover:underline">Profile</Link>
                <Link to="/account" className="hover:underline">Account</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
                </>
            ) : (
                <>
                <Link to="/signin" className="hover:underline">Sign In</Link>
                <Link to="/signup" className="hover:underline">Sign Up</Link>
                </>
            )}
            </nav>
      </div>
    </header>
  );
};

export default Header;
