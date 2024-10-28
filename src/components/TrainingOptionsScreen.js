import React, { useState } from 'react';

const TrainingOptionsScreen = ({ onNextClick, onBack, APPS_SCRIPT_URL }) => {
  const [selectedSet1, setSelectedSet1] = useState([]);
  const [selectedSet2, setSelectedSet2] = useState([]);
  const [showPrompt, setShowPrompt] = useState('');

  // Sample data for the two sets
  const set1Images = [
    { id: 'H', imageUrl: '/api/placeholder/200/200' }, // TRAINING CENTERS OF CORPORATIONS
    { id: 'I', imageUrl: '/api/placeholder/200/200' }, // TRAINERS IN NORTH AMERICA & EUROPE
    { id: 'J', imageUrl: '/api/placeholder/200/200' }, // TRAINERS IN SINGAPORE & AUSTRALIA
    { id: 'K', imageUrl: '/api/placeholder/200/200' }  // TRAINERS IN INDIA
  ];

  const set2Images = [
    { id: 'L', imageUrl: '/api/placeholder/200/200' }, // FINE ARTS & PERFORMING ARTS
    { id: 'N', imageUrl: '/api/placeholder/200/200' }, // GAMES & ACTIVITIES
    { id: 'P', imageUrl: '/api/placeholder/200/200' }, // DESIGN & ENTERTAINMENT
    { id: 'R', imageUrl: '/api/placeholder/200/200' }, // CASE STUDY & PRESENTATION
    { id: 'AB', imageUrl: '/api/placeholder/200/200' } // EMBEDDED MICRO-LEARNING
  ];

  const handleSet1Selection = (image) => {
    let newSelection = [...selectedSet1];
    if (newSelection.find(item => item.id === image.id)) {
      newSelection = newSelection.filter(item => item.id !== image.id);
    } else {
      if (newSelection.length >= 2) {
        newSelection.shift(); // Remove the first item if already 2 selected
      }
      newSelection.push(image);
    }
    setSelectedSet1(newSelection);
  };

  const handleSet2Selection = (image) => {
    let newSelection = [...selectedSet2];
    if (newSelection.find(item => item.id === image.id)) {
      newSelection = newSelection.filter(item => item.id !== image.id);
    } else {
      if (newSelection.length >= 2) {
        newSelection.shift(); // Remove the first item if already 2 selected
      }
      newSelection.push(image);
    }
    setSelectedSet2(newSelection);
  };

  const validateAndProceed = () => {
    if (selectedSet1.length !== 2) {
      setShowPrompt('SELECT ANY 2 FROM THE FIRST SET');
      setTimeout(() => setShowPrompt(''), 2000);
      return;
    }
    if (selectedSet2.length !== 2) {
      setShowPrompt('SELECT ANY 2 FROM THE SECOND SET');
      setTimeout(() => setShowPrompt(''), 2000);
      return;
    }
    onNextClick({ set1: selectedSet1, set2: selectedSet2 });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Header */}
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black text-center whitespace-normal">
          DESIRED DETAILS FOR THE SELECTED THEME:
        </h2>
        <p className="text-lg sm:text-xl italic text-center mt-2 mb-8">
          (choose from the 3 sets across both screens)
        </p>
      </div>

      {/* First Set */}
      <div className="w-full max-w-3xl mb-8 border-dotted border-2 border-gray-300 p-4">
        <div className="bg-gray-100 p-2 mb-4">
          <h3 className="text-2xl text-red-600 text-center">
            CHOOSE ANY 2
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {set1Images.map(image => (
            <div
              key={image.id}
              onClick={() => handleSet1Selection(image)}
              className="relative cursor-pointer w-40 h-40 border-2 border-gray-300"
            >
              <img
                src={image.imageUrl}
                alt={`Option ${image.id}`}
                className="w-full h-full object-contain"
              />
              {selectedSet1.find(item => item.id === image.id) && (
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

      {/* Second Set */}
      <div className="w-full max-w-3xl mb-8 border-dotted border-2 border-gray-300 p-4">
        <div className="bg-gray-100 p-2 mb-4">
          <h3 className="text-2xl text-red-600 text-center">
            CHOOSE ANY 2
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {set2Images.map(image => (
            <div
              key={image.id}
              onClick={() => handleSet2Selection(image)}
              className="relative cursor-pointer w-40 h-40 border-2 border-gray-300"
            >
              <img
                src={image.imageUrl}
                alt={`Option ${image.id}`}
                className="w-full h-full object-contain"
              />
              {selectedSet2.find(item => item.id === image.id) && (
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
          <p className="text-xl text-center">{showPrompt}</p>
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
          NEXT
        </button>
      </div>
    </div>
  );
};

export default TrainingOptionsScreen;
