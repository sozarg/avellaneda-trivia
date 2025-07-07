import logoAvellaneda from '../assets/logoavellaneda.png';
import './Footer.css';

const Footer = ({ theme = 'light' }) => {
  return (
    <footer className={`footer footer-${theme}`}>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoAvellaneda} alt="Logo Avellaneda" />
        </div>
        <div className="footer-text">
          <h3>Avellaneda</h3>
          <p>Municipalidad de Avellaneda</p>
          <p>- Güemes 835</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 