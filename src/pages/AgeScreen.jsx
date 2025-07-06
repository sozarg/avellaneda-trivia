import Footer from '../components/Footer';
import './AgeScreen.css';

const AgeScreen = ({ onAgeRangeSelect }) => {
  const handleAgeRangeClick = (ageRange) => {
    console.log('Rango de edad seleccionado:', ageRange);
    onAgeRangeSelect(ageRange);
  };

  return (
    <div className="age-screen">
      <div className="age-screen-content">
        <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
        
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
      </div>
      
      <Footer />
    </div>
  );
};

export default AgeScreen; 