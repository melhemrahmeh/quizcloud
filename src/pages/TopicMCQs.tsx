import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const topics = {
  aws: {
    name: "AWS Certification",
    questions: [
      {
        id: 1,
        question: "What does EC2 stand for?",
        options: ["Elastic Cloud Compute", "Elastic Compute Cloud", "Elastic Cloud Cluster", "None of the above"],
        answer: "Elastic Compute Cloud",
      },
      {
        id: 2,
        question: "Which AWS service is used for object storage?",
        options: ["EBS", "S3", "RDS", "EC2"],
        answer: "S3",
      },
    ],
  },
  javascript: {
    name: "JavaScript Basics",
    questions: [
      {
        id: 1,
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program",
      },
    ],
  },
};

const TopicMCQs: React.FC = () => {
  const { topicId } = useParams();
  const topic = topics[topicId as keyof typeof topics];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = () => {
    const currentQuestion = topic.questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    setIsCorrect(null);
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (!topic) {
    return <p className="text-center mt-20 text-xl text-red-500">Topic not found</p>;
  }

  const currentQuestion = topic.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{topic.name}</h1>
      <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
        <p className="text-lg font-medium">{currentQuestion.question}</p>
        <div className="mt-4 space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`block w-full p-3 text-left rounded-lg border ${
                selectedOption === option ? "border-blue-500 bg-blue-100" : "border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {isCorrect !== null && (
          <p className={`mt-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
            {isCorrect ? "Correct!" : "Wrong. Try again."}
          </p>
        )}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleAnswer}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Submit
          </button>
          {isCorrect && currentQuestionIndex < topic.questions.length - 1 && (
            <button
              onClick={nextQuestion}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicMCQs;
