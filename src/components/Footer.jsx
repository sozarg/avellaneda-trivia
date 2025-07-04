import logoAvellaneda from '../assets/logoavellaneda.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoAvellaneda} alt="Logo Avellaneda" />
        </div>
        <div className="footer-text">
          <h3>avellaneda</h3>
          <p>Municipalidad de Avellaneda</p>
          <p>- Güemes 835</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 