import React, { useState } from 'react';

const NewMethodologiesScreen = ({ onNextClick, onBack, APPS_SCRIPT_URL }) => {
  const [selectedSet3, setSelectedSet3] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);

  // Data for the third set of images
  const set3Images = [
    { id: 'T', imageUrl: '/api/placeholder/200/200' }, // IDEA OF USING AR & VR
    { id: 'V', imageUrl: '/api/placeholder/200/200' }, // IDEA OF USING GAMIFICATION & SIMULATION
    { id: 'X', imageUrl: '/api/placeholder/200/200' }, // IDEA OF USING BIO-FEEDBACK & NEURO-PROFILING
    { id: 'Z', imageUrl: '/api/placeholder/200/200' }, // IDEA OF USING REAL-TIME BEHAVIOUR ANALYTICS
    { id: 'AD', imageUrl: '/api/placeholder/200/200' } // IDEA OF USING GEN AI
  ];

  const handleSet3Selection = (image) => {
    let newSelection = [...selectedSet3];
    if (newSelection.find(item => item.id === image.id)) {
      newSelection = newSelection.filter(item => item.id !== image.id);
    } else {
      if (newSelection.length >= 2) {
        newSelection.shift(); // Remove the first item if already 2 selected
      }
      newSelection.push(image);
    }
    setSelectedSet3(newSelection);
  };

  const validateAndProceed = () => {
    if (selectedSet3.length !== 2) {
      setShowPrompt(true);
      setTimeout(() => setShowPrompt(false), 2000);
      return;
    }
    onNextClick(selectedSet3);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Header */}
      <div className="w-full max-w-4xl px-4 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black text-center whitespace-normal">
          MORE DESIRED DETAILS FOR THE SELECTED THEME:
        </h2>
      </div>

      {/* Third Set */}
      <div className="w-full max-w-3xl mb-8 border-dotted border-2 border-gray-300 p-4">
        <div className="bg-gray-100 p-2 mb-4">
          <h3 className="text-2xl text-red-600 text-center">
            CHOOSE ANY 2
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {set3Images.map(image => (
            <div
              key={image.id}
              onClick={() => handleSet3Selection(image)}
              className={`relative cursor-pointer w-40 h-40 border-2 ${
                selectedSet3.find(item => item.id === image.id)
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
            >
              <img
                src={image.imageUrl}
                alt={`Option ${image.id}`}
                className="w-full h-full object-contain"
              />
              {selectedSet3.find(item => item.id === image.id) && (
                <>
                  <div className="absolute inset-0 bg-black bg-opacity-20"/>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-75 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Selection Prompt */}
      {showPrompt && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white p-4 rounded-lg shadow-lg border-2 border-red-500 z-50">
          <p className="text-xl text-center">SELECT ANY 2 FROM THIS SET</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
        >
          GO BACK
        </button>
        <button
          onClick={validateAndProceed}
          className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
        >
          GET DETAILS
        </button>
      </div>
    </div>
  );
};

export default NewMethodologiesScreen;
