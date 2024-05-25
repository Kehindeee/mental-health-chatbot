// components/UserDetailsSection.tsx
import React from 'react';

const UserDetailsSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <p className="mb-4">Here are some resources and tools to help you with your mental health journey:</p>
        <ul className="mb-4">
          <li className="mb-2 flex items-center">
            <span className="mr-2">🧘</span>
            <span>Guided Meditations: Explore our collection of soothing meditations to calm your mind and body.</span>
          </li>
          <li className="mb-2 flex items-center">
            <span className="mr-2">📚</span>
            <span>Mental Health Resources: Access our library of articles, tools, and expert advice to support your mental wellbeing.</span>
          </li>
          <li className="mb-2 flex items-center">
            <span className="mr-2">🌱</span>
            <span>Self-Care Practices: Discover simple, effective self-care routines to nourish your mind, body, and spirit.</span>
          </li>
        </ul>
        <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200">Explore More</button>
      </div>
    </div>
  );
};

export default UserDetailsSection;
