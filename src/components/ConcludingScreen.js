import React from 'react';

const ConcludingScreen = ({ attemptsRemaining = 4, onStartOver, onExit, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 space-y-8">
      {/* GO BACK button at top */}
      <button
        onClick={onBack}
        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
      >
        GO BACK
      </button>

      {/* Main Content */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black">
          YOU'RE DONE !
        </h2>
        <div className="text-lg sm:text-xl lg:text-2xl text-blue-600">
          <p>In this session,</p>
          <p>you have {attemptsRemaining} of 4 attempts remaining</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onStartOver}
          className={`px-8 py-2 rounded-lg text-2xl ${
            attemptsRemaining > 0
              ? 'bg-green-500 text-white cursor-pointer'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
          disabled={attemptsRemaining === 0}
        >
          START OVER
        </button>
        <button
          onClick={onExit}
          className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
        >
          EXIT
        </button>
      </div>
    </div>
  );
};

export default ConcludingScreen;
