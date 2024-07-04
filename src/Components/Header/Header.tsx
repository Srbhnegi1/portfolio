import { NavLink } from "react-router-dom";
import "./Header.css";
import { HiOutlineXMark, HiOutlineBars4 } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="header">
        <div className="header-top">
          <div>
            <NavLink to="/">
              <img
                src="https://img.freepik.com/premium-vector/modern-letter-s-s-logo-monogram-logotype-vector-template-combined-with-luxury-fashion-identity_754537-1614.jpg?w=740"
                alt="namelogo"
                className="logo"
              />
            </NavLink>
          </div>
          <div className="menu" onClick={handleMenuToggle}>
            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars4 />}
          </div>
        </div>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <div>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/projects">
              <p>Projects</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="contact">
              <p>Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
