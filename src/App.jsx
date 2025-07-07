import { useState } from 'react';
import StartScreen from './pages/StartScreen';
import AgeScreen from './pages/AgeScreen';
import GameScreen from './pages/GameScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'age', 'game'
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  
  // Estados para manejar la transición
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousScreen, setPreviousScreen] = useState(null);

  const handleScreenTransition = (newScreen) => {
    if (isTransitioning) return; // Evitar múltiples transiciones simultáneas
    
    setIsTransitioning(true);
    setPreviousScreen(currentScreen);
    
    // Iniciar la transición
    setTimeout(() => {
      setCurrentScreen(newScreen);
      
      // Finalizar la transición después de que termine la animación
      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousScreen(null);
      }, 800); // Duración de la transición (0.8s)
    }, 50); // Pequeño delay para asegurar que el estado se actualice
  };

  const handleStartClick = () => {
    handleScreenTransition('age');
  };

  const handleAgeRangeSelect = (ageRange) => {
    setSelectedAgeRange(ageRange);
    handleScreenTransition('game');
  };

  const renderScreen = (screen, isLeaving = false) => {
    const animationClass = isLeaving ? 'screen-exit' : 'screen-enter';
    
    switch (screen) {
      case 'start':
        return (
          <div className={`screen-container ${animationClass}`}>
            <StartScreen onStartClick={handleStartClick} />
          </div>
        );
      case 'age':
        return (
          <div className={`screen-container ${animationClass}`}>
            <AgeScreen onAgeRangeSelect={handleAgeRangeSelect} />
          </div>
        );
      case 'game':
        return (
          <div className={`screen-container ${animationClass}`}>
            <GameScreen selectedAgeRange={selectedAgeRange} />
          </div>
        );
      default:
        return (
          <div className={`screen-container ${animationClass}`}>
            <StartScreen onStartClick={handleStartClick} />
          </div>
        );
    }
  };

  return (
    <div className="app">
      {/* Pantalla anterior (saliendo) */}
      {isTransitioning && previousScreen && renderScreen(previousScreen, true)}
      
      {/* Pantalla actual (entrando) */}
      {renderScreen(currentScreen, false)}
    </div>
  );
}

export default App;
