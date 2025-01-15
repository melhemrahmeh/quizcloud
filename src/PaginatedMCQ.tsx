import React, { useState } from "react";
import MCQComponent from "./MCQComponent";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  discussion?: string;
}

interface PaginatedMCQProps {
  questions: Question[];
  onComplete: (finalScore: number, finalResults: boolean[]) => void;
  showImmediateFeedback?: boolean; // New optional prop
}

const PaginatedMCQ: React.FC<PaginatedMCQProps> = ({
  questions,
  onComplete,
  showImmediateFeedback = true, // Default to true
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const questionsPerPage = 10;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleAnswer = (isCorrect: boolean) => {
    setResults((prevResults) => [...prevResults, isCorrect]);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleComplete = () => {
    onComplete(score, results); // Pass score and results to onComplete
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {currentQuestions.map((question, index) => (
        <MCQComponent
          key={indexOfFirstQuestion + index}
          question={question.question}
          options={question.options}
          correctAnswer={question.correctAnswer}
          discussion={question.discussion}
          onAnswer={showImmediateFeedback ? handleAnswer : undefined} // Disable immediate feedback if specified
        />
      ))}

      <div className="flex justify-between items-center w-full max-w-xl mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-800 dark:text-gray-200">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages ? (
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleComplete}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginatedMCQ;
