import Footer from '../components/Footer';
import './GameScreen.css';

const GameScreen = ({ selectedAgeRange }) => {
  return (
    <div className="game-screen">
      <div className="game-screen-content">
        <h1 className="title">¡Listo para jugar!</h1>
        <div className="game-content">
          <p>El juego está por comenzar...</p>
          <p>Rango de edad seleccionado: <strong>{selectedAgeRange}</strong></p>
          <p>Aquí se implementará la lógica del juego de trivia.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GameScreen; 