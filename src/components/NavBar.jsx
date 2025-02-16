import cart from "../assets/cart.svg";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="menu-logo">☰</div>
        <Link to="/" className="brand">
          <div>Aus Food</div>
        </Link>
        <Link to="/cart">
          <img src={cart} className="logo-cart" alt="Cart" />
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
