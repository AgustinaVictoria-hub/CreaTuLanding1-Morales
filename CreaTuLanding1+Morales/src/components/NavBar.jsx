import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#eee",
      }}
    >
      <div>
        <img src={logo} alt="logo de Blühend" style={{ height: "50px" }} />
      </div>

      <div>
        <Link to="/" style={{ margin: "0 10px" }}>
          Inicio
        </Link>
        <Link to="/category/joyas" style={{ margin: "0 10px" }}>
          Joyas
        </Link>
        <Link to="/category/accesorios" style={{ margin: "0 10px" }}>
          Accesorios
        </Link>
        <Link to="/category/cosméticos" style={{ margin: "0 10px" }}>
          Cosméticos
        </Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;