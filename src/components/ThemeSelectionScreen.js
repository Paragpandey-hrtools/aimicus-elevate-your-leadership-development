import React, { useState, useEffect } from 'react';

const ThemeSelectionScreen = ({ onNextClick, onThemeSelect, APPS_SCRIPT_URL }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [randomThemes, setRandomThemes] = useState([]);

  // Function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Function to fetch themes from Apps Script
  const fetchThemes = async () => {
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getRandomThemes`);
      const data = await response.json();
      if (data.status === 200 && data.data.themes) {
        setRandomThemes(data.data.themes);
      }
    } catch (error) {
      console.error('Error fetching themes:', error);
      // Use placeholder data if fetch fails
      const placeholderThemes = Array(32).fill(null).map((_, index) => ({
        id: index + 1,
        title: `Theme ${index + 1}`,
        imageUrl: `/api/placeholder/200/200`
      }));
      // Randomly select 15 themes
      setRandomThemes(shuffleArray(placeholderThemes).slice(0, 15));
    }
  };

  // Fetch themes when component mounts
  useEffect(() => {
    fetchThemes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageSelect = (theme) => {
    setSelectedTheme(theme);
    onThemeSelect && onThemeSelect(theme);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Single line header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black text-center whitespace-nowrap mb-2">
        <span className="text-black">WHAT LEADERS MUST DO: </span>
        <span className="text-red-600">SELECT ANY 1</span>
      </h2>
      <p className="text-xl italic mt-2 mb-8">
        (from the randomised 15 of 32 themes)
      </p>

      {/* Fixed 3x5 Grid */}
      <div className="w-full max-w-3xl mx-auto mb-8 grid grid-cols-3 gap-2">
        {randomThemes.slice(0, 15).map((theme, index) => (
          <div
            key={theme.id}
            className={`w-32 h-32 border-2 cursor-pointer relative ${
              selectedTheme?.id === theme.id
                ? 'border-green-500'
                : 'border-gray-300'
            }`}
            onClick={() => handleImageSelect(theme)}
          >
            <img
              src={theme.imageUrl}
              alt={`Theme ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {selectedTheme?.id === theme.id && (
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

      {/* Selection Prompt */}
      {showPrompt && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white p-4 rounded-lg shadow-lg border-2 border-red-500 z-50">
          <p className="text-xl text-center">SELECT ANY 1</p>
        </div>
      )}

      {/* Navigation Button */}
      <button
        onClick={() => {
          if (selectedTheme) {
            onNextClick();
          } else {
            setShowPrompt(true);
            setTimeout(() => setShowPrompt(false), 2000);
          }
        }}
        className="bg-green-500 text-white px-8 py-2 rounded-lg text-2xl"
      >
        NEXT
      </button>
    </div>
  );
};

export default ThemeSelectionScreen;
