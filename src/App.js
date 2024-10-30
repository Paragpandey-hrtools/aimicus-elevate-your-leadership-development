import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import IntroductionScreen from './components/IntroductionScreen';
import ThemeSelectionScreen from './components/ThemeSelectionScreen';
import TrainingOptionsScreen from './components/TrainingOptionsScreen';
import NewMethodologiesScreen from './components/NewMethodologiesScreen';
import FirstOutputScreen from './components/FirstOutputScreen';
import SecondOutputScreen from './components/SecondOutputScreen';
import ThirdOutputScreen from './components/ThirdOutputScreen';
import FourthOutputScreen from './components/FourthOutputScreen';
import FifthOutputScreen from './components/FifthOutputScreen';
import SixthOutputScreen from './components/SixthOutputScreen';
import ConcludingScreen from './components/ConcludingScreen';

// Apps Script URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby2MV2pXaqAwZeClPG-2UvTRM5MzJA43RrqcjZ5hjXjFFvp4f-rZHPAuHhAq6k6QbCi6w/exec';

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
            onThemeSelect={setSelectedTheme}
            onNext={() => navigateTo('trainingOptions')}
          />
        );
      case 'trainingOptions':
        return (
          <TrainingOptionsScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            onOptionsSelect={setSelectedTrainingOptions}
            onNext={() => navigateTo('newMethodologies')}
            onBack={() => navigateTo('themeSelection')}
          />
        );
      case 'newMethodologies':
        return (
          <NewMethodologiesScreen
            APPS_SCRIPT_URL={APPS_SCRIPT_URL}
            onMethodologiesSelect={setSelectedNewMethodologies}
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
