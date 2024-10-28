import React, { useState } from 'react';

const SecondOutputScreen = ({ selectedTheme, selectedTrainingOptions, onNextClick, onBack, APPS_SCRIPT_URL }) => {
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
      {/* Two-line header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black whitespace-nowrap">
          MORE DETAILS FOR THE SELECTED THEME:
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-blue-600 mt-2">
          TRAINING ACADEMIES, UNIVS & FIRMS
        </h2>
      </div>

      {/* First Selection */}
      <div className="w-full max-w-4xl flex gap-6 mb-8">
        <div className="w-44 h-44 flex-shrink-0">
          <img
            src={selectedTrainingOptions?.[0]?.imageUrl || '/api/placeholder/200/200'}
            alt="First Training Option"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <TruncatableText
            text={selectedTheme?.firstTrainingText || 'Loading training details...'}
            type="text1"
            align="left"
          />
        </div>
      </div>

      {/* Second Selection */}
      <div className="w-full max-w-4xl flex gap-6 mb-8">
        <div className="w-44 h-44 flex-shrink-0">
          <img
            src={selectedTrainingOptions?.[1]?.imageUrl || '/api/placeholder/200/200'}
            alt="Second Training Option"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <TruncatableText
            text={selectedTheme?.secondTrainingText || 'Loading training details...'}
            type="text2"
            align="left"
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

export default SecondOutputScreen;
