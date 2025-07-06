import { useState } from 'react';
import StartScreen from './pages/StartScreen';
import AgeScreen from './pages/AgeScreen';
import GameScreen from './pages/GameScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'age', 'game'
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  const handleStartClick = () => {
    setCurrentScreen('age');
  };

  const handleAgeRangeSelect = (ageRange) => {
    setSelectedAgeRange(ageRange);
    setCurrentScreen('game');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStartClick={handleStartClick} />;
      case 'age':
        return <AgeScreen onAgeRangeSelect={handleAgeRangeSelect} />;
      case 'game':
        return <GameScreen selectedAgeRange={selectedAgeRange} />;
      default:
        return <StartScreen onStartClick={handleStartClick} />;
    }
  };

  return (
    <>
      {renderCurrentScreen()}
    </>
  );
}

export default App;
