import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <>
        <h2>Get in touch</h2>
        <div className="footer">
          <NavLink to="https://www.linkedin.com/in/saurabh-singh-negi-0207a1251/">
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
