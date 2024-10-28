import React, { useState } from 'react';

const FirstOutputScreen = ({ selectedTheme, onNextClick, APPS_SCRIPT_URL }) => {
  const [expandedText, setExpandedText] = useState({
    applying: false,
    thinker: false,
    ted: false,
    article: false
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
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black text-center mb-8 whitespace-nowrap">
        BASIC DETAILS FOR THE SELECTED THEME
      </h2>

      {/* Top Section */}
      <div className="w-full max-w-4xl flex gap-6 mb-8">
        {/* Selected Theme Image */}
        <div className="w-48 h-48 flex-shrink-0">
          <img
            src={selectedTheme?.imageUrl || '/api/placeholder/250/250'}
            alt="Selected Theme"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Applying Thought Text */}
        <div className="flex-1">
          <TruncatableText
            text={selectedTheme?.applyingThought || 'Loading...'}
            type="applying"
            align="right"
          />
        </div>
      </div>

      {/* Bottom Section - Three Columns */}
      <div className="w-full max-w-4xl grid grid-cols-3 gap-6">
        {/* Thinker & Work */}
        <div>
          <img
            src="/api/placeholder/200/200"
            alt="Thinker & Work"
            className="w-44 h-44 object-contain mb-4"
          />
          <TruncatableText
            text={selectedTheme?.thinkerInfo || 'Loading...'}
            type="thinker"
            align="left"
          />
        </div>

        {/* TED Talk */}
        <div>
          <img
            src="/api/placeholder/200/200"
            alt="TED Talk"
            className="w-44 h-44 object-contain mb-4"
          />
          <TruncatableText
            text={selectedTheme?.tedTalk || 'Loading...'}
            type="ted"
            align="center"
          />
        </div>

        {/* Published Article */}
        <div>
          <img
            src="/api/placeholder/200/200"
            alt="Published Article"
            className="w-44 h-44 object-contain mb-4"
          />
          <TruncatableText
            text={selectedTheme?.article || 'Loading...'}
            type="article"
            align="right"
          />
        </div>
      </div>

      {/* Navigation Button */}
      <button 
        onClick={onNextClick}
        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl mt-8"
      >
        NEXT
      </button>
    </div>
  );
};

export default FirstOutputScreen;
