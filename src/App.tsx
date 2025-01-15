import React, { useState, useEffect } from "react";
import PaginatedMCQ from "./PaginatedMCQ";
import Login from "./Login";
import CategorySelection from "./CategorySelection";
import "./index.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  discussion?: string;
}

interface Result {
  question: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    if (category) {
      fetch(`/questions.json`)
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    }
  }, [category]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleComplete = (finalScore: number, finalResults: Result[]) => {
    setScore(finalScore);
    setResults(finalResults);
    setQuizCompleted(true);
  };

  if (!user) {
    return <Login onLogin={(username) => setUser(username)} />;
  }

  if (!category) {
    return <CategorySelection onCategorySelect={(cat) => setCategory(cat)} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-blue-600 dark:bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 z-10 shadow-md">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="5" />
          </svg>
          <h1 className="text-2xl font-bold">Practice Tests</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-white text-blue-600 dark:bg-gray-700 dark:text-white rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <div className="w-full max-w-6xl p-6 mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-auto">
        {!quizCompleted ? (
          <>
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-6">
              {category} Quiz
            </h2>
            {questions.length > 0 ? (
              <PaginatedMCQ
                questions={questions}
                onComplete={(finalScore, finalResults) => {
                  setScore(finalScore);
                  setQuizCompleted(true);
                }}
                showImmediateFeedback={false} // Disable immediate feedback for this example
              />
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Loading questions...</p>
            )}
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6">Quiz Results</h2>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              You scored <span className="text-green-500 font-bold">{score}</span> out of {questions.length}.
            </p>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-lg shadow-md ${
                    result.isCorrect
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                  } border`}
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                    {index + 1}. {result.question}
                  </h3>
                  <p
                    className={`mb-1 ${
                      result.isCorrect ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    Your Answer: {result.selectedAnswer || "No answer selected"}
                  </p>
                  {!result.isCorrect && (
                    <p className="text-gray-700 dark:text-gray-300">
                      Correct Answer: {result.correctAnswer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-4 text-center mt-6">
        <p>© 2025 Practice Tests. All rights reserved.</p>
        <p>Contact us: support@practicetests.com</p>
      </footer>
    </div>
  );
};

export default App;