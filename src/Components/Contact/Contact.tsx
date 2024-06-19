import "./Contact.css";
import { HiMiniPhone } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TfiEmail, TfiLinkedin } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactItem">
        <div className="iconColumn">
          <HiMiniPhone />
        </div>
        <div className="textColumn">
          <p>
            <strong>: 7617469685</strong>
          </p>
        </div>
      </div>
      <div className="contactItem">
        <div className="iconColumn">
          <TfiEmail />
        </div>
        <div className="textColumn">
          <p>
            <strong>: srbhnegi333@gmail.com</strong>
          </p>
        </div>
      </div>
      <div className="contactItem">
        <div className="iconColumn">
          <FaGithub />
        </div>
        <div className="textColumn">
          <p>
            <NavLink to="https://github.com/Srbhnegi1">
              <strong>: https://github.com/Srbhnegi1</strong>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="contactItem">
        <div className="iconColumn">
          <TfiLinkedin />
        </div>
        <div className="textColumn">
          <p>
            <NavLink to="https://www.linkedin.com/in/srbhnegi/">
              <strong>: https://www.linkedin.com/in/srbhnegi/</strong>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
