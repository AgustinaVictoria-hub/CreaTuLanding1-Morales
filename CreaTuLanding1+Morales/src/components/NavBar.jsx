import CartWidget from './CartWidget';
import logo from '../assets/logo.jpeg';
const NavBar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee'}}>
      <div>
        <img src={logo} alt="logo de bluhend" style={{ height: '50px'}} />
      </div>

      <div>
        <a href="#inicio" style={{margin: '0 10px'}}>Inicio</a>
        <a href="#productos" style={{margin: '0 10px'}}>Productos</a>
        <a href="#contacto" style={{margin: '0 10px'}}>Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
