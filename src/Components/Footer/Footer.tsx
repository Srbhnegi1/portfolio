import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <NavLink to="https://github.com/srbhnegi">
          <FaGithub />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/saurabh-singh-negi-0207a1251/">
          <FaLinkedin />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
