// components/DetailsSection.tsx
import React from 'react';

const DetailsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Your Personal Mental Health Companion</h2>
        <p className="text-lg mb-6">
          Our AI-powered chatbot is here to provide you with the support and resources you need, whenever you need them.
          Explore our features and discover how we can help you on your mental health journey.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p>Our chatbot is available anytime, day or night, to provide you with the support you need.</p>
          </div>
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
            <p>
              Based on your unique needs and preferences, our chatbot will provide you with personalized recommendations
              and resources.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Confidential and Secure</h3>
            <p>
              Your privacy and security are our top priorities. All conversations with our chatbot are completely
              confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
