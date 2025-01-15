// src/components/SessionTimeout.tsx
import React, { useEffect, useState } from 'react';

const SessionTimeout: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === 0) {
    alert('Session expired. You will be logged out.');
    window.location.reload();
  }

  return (
    <div className="mt-4 text-gray-600">
      <p>Your session will expire in <strong>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</strong></p>
    </div>
  );
};

export default SessionTimeout;
