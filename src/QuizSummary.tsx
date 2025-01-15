import React from "react";

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onGoToLeaderboard: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions, onRetry, onGoToLeaderboard }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">Quiz Summary</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          You scored <span className="text-green-500 font-bold">{score}</span> out of{" "}
          <span className="font-bold">{totalQuestions}</span>.
        </p>
        <div className="space-y-4">
          <button
            onClick={onRetry}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Retry Quiz
          </button>
          <button
            onClick={onGoToLeaderboard}
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Go to Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSummary;
