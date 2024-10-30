import React from 'react';

const IntroductionScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <h2 className="text-3xl font-sans text-blue-600">HIGHLIGHTS</h2>
      <div className="w-full max-w-md">
        <ul className="list-disc space-y-4 text-xl pl-6">
          <li><strong>Futuristic themes</strong> from <strong>top thinkers</strong></li>
          <li>Information about pre-read</li>
          <li><strong>Academies</strong> of global corporations</li>
          <li>Top training <strong>universities & firms</strong></li>
          <li>Ideas & trainers using <strong>fun methodologies</strong></li>
          <li>Ideas & trainers using <strong>new methodologies</strong></li>
        </ul>
      </div>
      <h2 className="text-3xl font-sans text-blue-600">BENEFITS</h2>
      <div className="w-full max-w-md">
        <ul className="list-disc space-y-4 text-xl pl-6">
          <li>More <strong>choices</strong> & best-in-class <strong>information</strong> at your fingertips</li>
          <li>Development decisions can also be <strong>participant-forward</strong></li>
          <li>Consistent progresss towards <strong>future-readiness</strong></li>
          <li>More potential <strong>partners to co-create</strong> new programs with</li>
          <li>More <strong>possibilities of mix-n-match</strong> depending on preferences & budgets</li>
        </ul>
      </div>
      <button
        onClick={onStart}
        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl mt-4"
      >
        START
      </button>
    </div>
  );
};

export default IntroductionScreen;
