import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink to="/">
            <img
              src="https://img.freepik.com/premium-vector/modern-letter-s-s-logo-monogram-logotype-vector-template-combined-with-luxury-fashion-identity_754537-1614.jpg?w=740"
              alt="namelogo"
              className="logo"
            />
          </NavLink>
        </div>
        <div className="navLinks">
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
