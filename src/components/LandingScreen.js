import React from 'react';

const LandingScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-sans">ELEVATE YOUR</h1>
        <h1 className="text-4xl font-sans">LEADERSHIP DEVELOPMENT</h1>
      </div>
      <img
        src="/api/placeholder/300/300"
        alt="Logo"
        className="w-64 h-64"
      />
      <h2 className="text-3xl font-sans">IN EASY STEPS:</h2>
      <div className="w-full max-w-md">
        <ul className="list-disc space-y-4 text-xl pl-6">
          <li>Select <strong>1</strong> futuristic development theme</li>
          <li>Chose the types of information you want for that theme</li>
          <li>Get your desired information</li>
          <li>Start over (upto <strong>4</strong> times in the same session) or Exit</li>
        </ul>
      </div>
      <button
        onClick={onStart}
        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl mt-4"
      >
        TRY THE DEMO
      </button>
    </div>
  );
};

export default LandingScreen;
