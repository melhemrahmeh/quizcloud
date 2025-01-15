import React from "react";

interface CategorySelectionProps {
  onCategorySelect: (category: string) => void;
}

const categories = ["Science", "History", "Tech"];

const CategorySelection: React.FC<CategorySelectionProps> = ({ onCategorySelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Choose a Category</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategorySelect(category)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySelection;
