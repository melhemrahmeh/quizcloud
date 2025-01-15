import React, { useState } from "react";

interface MCQProps {
  question: string;
  options: string[];
  correctAnswer: string;
  discussion?: string;
  onAnswer?: (isCorrect: boolean) => void;
}

const MCQComponent: React.FC<MCQProps> = ({
  question,
  options,
  correctAnswer,
  discussion,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (onAnswer) {
      onAnswer(option === correctAnswer);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`block w-full text-left px-4 py-2 border rounded-lg transition-all
              ${
                selectedOption === option
                  ? option === correctAnswer
                    ? "bg-green-500 text-white border-green-600"
                    : "bg-red-500 text-white border-red-600"
                  : "bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
              }
            `}
          >
            {`${index + 1}. ${option}`}
          </button>
        ))}
      </div>

      {discussion && selectedOption && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 border rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">{discussion}</p>
        </div>
      )}
    </div>
  );
};

export default MCQComponent;