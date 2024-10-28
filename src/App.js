import React, { useState } from 'react';

// Apps Script URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby2MV2pXaqAwZeClPG-2UvTRM5MzJA43RrqcjZ5hjXjFFvp4f-rZHPAuHhAq6k6QbCi6w/exec';

// Landing Screen Component
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

// Introduction Screen Component
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

// Main App Component
const App = () => {
  // State management
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [attemptsRemaining, setAttemptsRemaining] = useState(4);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedTrainingOptions, setSelectedTrainingOptions] = useState({
    set1: [],
    set2: []
  });
  const [selectedNewMethodologies, setSelectedNewMethodologies] = useState([]);

  // Function to handle screen navigation
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Function to handle starting over
  const handleStartOver = () => {
    if (attemptsRemaining > 0) {
      setAttemptsRemaining(prev => prev - 1);
      setSelectedTheme(null);
      setSelectedTrainingOptions({ set1: [], set2: [] });
      setSelectedNewMethodologies([]);
      setCurrentScreen('themeSelection');
    }
  };

  // Function to handle exit
  const handleExit = () => {
    setCurrentScreen('landing');
    setAttemptsRemaining(4);
    setSelectedTheme(null);
    setSelectedTrainingOptions({ set1: [], set2: [] });
    setSelectedNewMethodologies([]);
  };

  // Function to handle theme selection
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  // Function to handle training options selection
  const handleTrainingOptionsSelect = (options) => {
    setSelectedTrainingOptions(options);
  };

  // Function to handle new methodologies selection
  const handleNewMethodologiesSelect = (methodologies) => {
    setSelectedNewMethodologies(methodologies);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingScreen onStart={() => navigateTo('introduction')} />;
      case 'introduction':
        return <IntroductionScreen onStart={() => navigateTo('themeSelection')} />;
      case 'themeSelection':
        return (
          <ThemeSelectionScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            onThemeSelect={handleThemeSelect}
            onNext={() => navigateTo('trainingOptions')}
          />
        );
      case 'trainingOptions':
        return (
          <TrainingOptionsScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            onOptionsSelect={handleTrainingOptionsSelect}
            onNext={() => navigateTo('newMethodologies')}
            onBack={() => navigateTo('themeSelection')}
          />
        );
      case 'newMethodologies':
        return (
          <NewMethodologiesScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            onMethodologiesSelect={handleNewMethodologiesSelect}
            onNext={() => navigateTo('firstOutput')}
            onBack={() => navigateTo('trainingOptions')}
          />
        );
      case 'firstOutput':
        return (
          <FirstOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            onNext={() => navigateTo('secondOutput')}
          />
        );
      case 'secondOutput':
        return (
          <SecondOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            selectedTrainingOptions={selectedTrainingOptions.set1}
            onNext={() => navigateTo('thirdOutput')}
            onBack={() => navigateTo('firstOutput')}
          />
        );
      case 'thirdOutput':
        return (
          <ThirdOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            selectedMethodologies={selectedTrainingOptions.set2[0]}
            onNext={() => navigateTo('fourthOutput')}
            onBack={() => navigateTo('secondOutput')}
          />
        );
      case 'fourthOutput':
        return (
          <FourthOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            selectedMethodologies={selectedTrainingOptions.set2[1]}
            onNext={() => navigateTo('fifthOutput')}
            onBack={() => navigateTo('thirdOutput')}
          />
        );
      case 'fifthOutput':
        return (
          <FifthOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            selectedMethodologies={selectedNewMethodologies[0]}
            onNext={() => navigateTo('sixthOutput')}
            onBack={() => navigateTo('fourthOutput')}
          />
        );
      case 'sixthOutput':
        return (
          <SixthOutputScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            selectedTheme={selectedTheme}
            selectedMethodologies={selectedNewMethodologies[1]}
            onNext={() => navigateTo('concluding')}
            onBack={() => navigateTo('fifthOutput')}
          />
        );
      case 'concluding':
        return (
          <ConcludingScreen
            attemptsRemaining={attemptsRemaining}
            onStartOver={handleStartOver}
            onExit={handleExit}
            onBack={() => navigateTo('sixthOutput')}
          />
        );
      default:
        return <LandingScreen onStart={() => navigateTo('introduction')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderScreen()}
    </div>
  );
};

export default App;
