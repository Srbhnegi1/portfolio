import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <>
        <h3>Get in touch</h3>
        <div className="footer">
          <NavLink to="https://www.linkedin.com/in/srbhnegi/">
            <FaLinkedin />
          </NavLink>
          <NavLink to="https://github.com/Srbhnegi1">
            <FaGithub />
          </NavLink>
        </div>
      </>
    </div>
  );
};

export default Footer;
