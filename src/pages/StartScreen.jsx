import Lottie from 'lottie-react';
import bookWalkAnimation from '../assets/book-walk.json';
import './StartScreen.css';

const StartScreen = () => {
  return (
    <div className="start-screen">
      <div className="start-screen-content">
        <div className="animation-container">
          <Lottie
            animationData={bookWalkAnimation}
            loop={true}
            autoplay={true}
            speed={0.5}
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        
        <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
        
        <div className="buttons-container">
          <button className="start-button">Jugar ahora</button>
          <button className="start-button">Instrucciones</button>
          <button className="start-button">Premios</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen; 