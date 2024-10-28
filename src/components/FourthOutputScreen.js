import React, { useState } from 'react';

const FourthOutputScreen = ({ selectedTheme, selectedMethodologies, onNextClick, onBack, APPS_SCRIPT_URL }) => {
  const [expandedText, setExpandedText] = useState({
    text1: false,
    text2: false
  });

  const handleTextExpand = (textType) => {
    setExpandedText(prev => ({
      ...prev,
      [textType]: !prev[textType]
    }));
  };

  // Truncatable text component
  const TruncatableText = ({ text, type, align = 'left' }) => {
    const isExpanded = expandedText[type];
    const truncateLength = 100;
    const shouldTruncate = text?.length > truncateLength;

    return (
      <div className={`text-lg text-${align} transition-all duration-300`}>
        {isExpanded ? text : text?.slice(0, truncateLength)}
        {shouldTruncate && (
          <span
            onClick={() => handleTextExpand(type)}
            className="text-blue-500 cursor-pointer hover:underline ml-1"
          >
            {isExpanded ? " ...show less" : " ...see more"}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Three-line header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black whitespace-nowrap">
          MORE DETAILS FOR THE SELECTED THEME:
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-blue-600 mt-2">
          IDEA & TRAINERS USING
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-blue-600 mt-2">
          FUN METHODOLOGY (2)
        </h2>
      </div>

      {/* First Selection - Fun Methodology Idea */}
      <div className="w-full max-w-4xl flex gap-6 mb-8">
        <div className="w-44 h-44 flex-shrink-0">
          <img
            src={selectedMethodologies?.ideaImageUrl || '/api/placeholder/200/200'}
            alt="Fun Methodology Idea"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <TruncatableText
            text={selectedTheme?.funMethodology2Idea || 'Loading methodology details...'}
            type="text1"
            align="left"
          />
        </div>
      </div>

      {/* Second Selection - Trainers Using This Methodology */}
      <div className="w-full max-w-4xl flex gap-6 mb-8">
        <div className="w-44 h-44 flex-shrink-0">
          <img
            src={selectedMethodologies?.trainersImageUrl || '/api/placeholder/200/200'}
            alt="Trainers Using Methodology"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <TruncatableText
            text={selectedTheme?.funMethodology2Trainers || 'Loading trainers details...'}
            type="text2"
            align="right"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
        >
          GO BACK
        </button>
        <button
          onClick={onNextClick}
          className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default FourthOutputScreen;
