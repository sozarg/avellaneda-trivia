import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import bookWalkAnimation from '../assets/book-walk.json';
import './StartScreen.css';

const StartScreen = () => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);
  const [showAgeRanges, setShowAgeRanges] = useState(false);

  useEffect(() => {
    if (animationContainer.current) {
      // Crear la animación
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: bookWalkAnimation,
      });

      // Configurar la velocidad al 75%
      animationInstance.current.setSpeed(0.75);
    }

    // Cleanup: destruir la animación cuando el componente se desmonte
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  const handleStartClick = () => {
    setShowAgeRanges(true);
  };

  const handleAgeRangeClick = (ageRange) => {
    console.log('Rango de edad seleccionado:', ageRange);
    // Aquí podrías manejar la lógica de navegación o guardar el rango seleccionado
  };

  // Datos de ejemplo para la tabla
  const topScores = [
    { position: 1, name: 'María González', score: 850 },
    { position: 2, name: 'Carlos Pérez', score: 780 },
    { position: 3, name: 'Ana López', score: 720 },
    { position: 4, name: 'Luis Martín', score: 650 },
    { position: 5, name: 'Sofia Ruiz', score: 590 }
  ];

  return (
    <div className="start-screen">
      <div className="start-screen-content">
        <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
        
        <div className="animation-container">
          <div 
            ref={animationContainer}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        
        <button className="start-button" onClick={handleStartClick}>
          Comenzar
        </button>
        
        {showAgeRanges && (
          <div className="age-ranges-section">
            <h2 className="age-ranges-title">Elegí tu rango de edad</h2>
            <div className="age-ranges-container">
              <button 
                className="age-range-button"
                onClick={() => handleAgeRangeClick('8-11')}
              >
                8–11 años
              </button>
              <button 
                className="age-range-button"
                onClick={() => handleAgeRangeClick('12-15')}
              >
                12–15 años
              </button>
              <button 
                className="age-range-button"
                onClick={() => handleAgeRangeClick('16-17')}
              >
                16–17 años
              </button>
              <button 
                className="age-range-button"
                onClick={() => handleAgeRangeClick('18+')}
              >
                18 o más
              </button>
            </div>
          </div>
        )}
        
        {showAgeRanges && (
          <div className="leaderboard-section">
            <h2 className="leaderboard-title">Mejores puntuados</h2>
            <div className="leaderboard-table">
              <div className="table-header">
                <div className="table-cell">Pos.</div>
                <div className="table-cell">Nombre</div>
                <div className="table-cell">Puntaje</div>
              </div>
              {topScores.map((player) => (
                <div key={player.position} className="table-row">
                  <div className="table-cell">{player.position}</div>
                  <div className="table-cell">{player.name}</div>
                  <div className="table-cell">{player.score}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartScreen; 