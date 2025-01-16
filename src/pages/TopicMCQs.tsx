import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const topics = {
    "aws-clf02": {
      "name": "AWS Cloud Practitioner Certification",
      "questions": [
        {
          "id": 1,
          "question": "What does EC2 stand for?",
          "options": ["Elastic Cloud Compute", "Elastic Compute Cloud", "Elastic Cloud Cluster", "None of the above"],
          "answer": "Elastic Compute Cloud"
        },
        {
          "id": 2,
          "question": "Which AWS service is used for object storage?",
          "options": ["EBS", "S3", "RDS", "EC2"],
          "answer": "S3"
        },
        {
          "id": 3,
          "question": "Which AWS service is used to launch and manage virtual machines?",
          "options": ["EC2", "Lambda", "Elastic Beanstalk", "S3"],
          "answer": "EC2"
        },
        {
          "id": 4,
          "question": "Which service provides a fully managed relational database?",
          "options": ["DynamoDB", "RDS", "Redshift", "Aurora"],
          "answer": "RDS"
        },
        {
          "id": 5,
          "question": "What does S3 stand for in AWS?",
          "options": ["Simple Storage Service", "Secure Storage Service", "Scalable Storage System", "None of the above"],
          "answer": "Simple Storage Service"
        },
        {
          "id": 6,
          "question": "Which AWS service is used for DNS and domain management?",
          "options": ["CloudFront", "Route 53", "VPC", "Direct Connect"],
          "answer": "Route 53"
        },
        {
          "id": 7,
          "question": "Which AWS service provides serverless computing?",
          "options": ["EC2", "Lambda", "EKS", "Lightsail"],
          "answer": "Lambda"
        },
        {
          "id": 8,
          "question": "Which pricing model allows you to pay only for the resources you use?",
          "options": ["Reserved Instances", "Pay-as-you-go", "Spot Instances", "Upfront Payment"],
          "answer": "Pay-as-you-go"
        },
        {
          "id": 9,
          "question": "Which AWS service is used for caching web content?",
          "options": ["CloudFront", "ElastiCache", "S3", "API Gateway"],
          "answer": "CloudFront"
        },
        {
          "id": 10,
          "question": "What is the purpose of the AWS Free Tier?",
          "options": ["To offer free resources for a limited time", "To provide discounts for long-term usage", "To offer free unlimited resources", "None of the above"],
          "answer": "To offer free resources for a limited time"
        },
        {
          "id": 11,
          "question": "Which AWS service allows you to create isolated networks?",
          "options": ["VPC", "Direct Connect", "CloudFront", "IAM"],
          "answer": "VPC"
        },
        {
          "id": 12,
          "question": "Which AWS service provides a NoSQL database?",
          "options": ["RDS", "DynamoDB", "Redshift", "Aurora"],
          "answer": "DynamoDB"
        },
        {
          "id": 13,
          "question": "What does IAM stand for in AWS?",
          "options": ["Identity and Access Management", "Instance and Access Monitoring", "Infrastructure and Application Management", "None of the above"],
          "answer": "Identity and Access Management"
        },
        {
          "id": 14,
          "question": "Which AWS service is designed for building APIs?",
          "options": ["API Gateway", "CloudFront", "Elastic Beanstalk", "EC2"],
          "answer": "API Gateway"
        },
        {
          "id": 15,
          "question": "Which service can be used to monitor and manage AWS resources?",
          "options": ["CloudTrail", "CloudWatch", "IAM", "Config"],
          "answer": "CloudWatch"
        },
        {
          "id": 16,
          "question": "What is an AWS Region?",
          "options": ["A physical location with multiple data centers", "A single data center", "A logical grouping of services", "None of the above"],
          "answer": "A physical location with multiple data centers"
        },
        {
          "id": 17,
          "question": "Which service provides security by allowing you to manage keys?",
          "options": ["IAM", "KMS", "Shield", "Inspector"],
          "answer": "KMS"
        },
        {
          "id": 18,
          "question": "What is the main benefit of using AWS Auto Scaling?",
          "options": ["Improved security", "Reduced costs by scaling up/down", "Simplified billing", "Faster deployments"],
          "answer": "Reduced costs by scaling up/down"
        },
        {
          "id": 19,
          "question": "What is the purpose of the AWS Well-Architected Framework?",
          "options": ["To provide best practices for designing cloud solutions", "To monitor costs", "To manage security groups", "To deploy applications"],
          "answer": "To provide best practices for designing cloud solutions"
        },
        {
          "id": 20,
          "question": "Which AWS service helps migrate databases to the cloud?",
          "options": ["DMS", "Snowball", "Data Pipeline", "Athena"],
          "answer": "DMS"
        },
        {
          "id": 21,
          "question": "What is the purpose of Amazon CloudFront?",
          "options": ["To improve application performance by caching content closer to users", "To store objects", "To manage identity and access", "To run serverless applications"],
          "answer": "To improve application performance by caching content closer to users"
        },
        {
          "id": 22,
          "question": "Which AWS service is used to deliver messages between decoupled applications?",
          "options": ["SNS", "SQS", "SES", "MQ"],
          "answer": "SQS"
        },
        {
          "id": 23,
          "question": "Which AWS service can be used to analyze large datasets?",
          "options": ["Athena", "QuickSight", "Redshift", "All of the above"],
          "answer": "All of the above"
        },
        {
          "id": 24,
          "question": "What does the shared responsibility model mean in AWS?",
          "options": ["AWS and customers share responsibilities for security and compliance", "AWS is responsible for everything", "Customers are responsible for everything", "None of the above"],
          "answer": "AWS and customers share responsibilities for security and compliance"
        },
        {
          "id": 25,
          "question": "Which AWS service helps manage and provision infrastructure as code?",
          "options": ["CloudFormation", "Config", "OpsWorks", "CodePipeline"],
          "answer": "CloudFormation"
        }
      ]
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
