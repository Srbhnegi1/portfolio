import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="projectItem ytClone">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/04/16/45/you-tube-3374405_1280.jpg"
          alt="ytclonePhoto"
        />
        <div className="projectSummery">
          <h2>YouTube Clone</h2>
          <p>
            The project focuses on building a basic
            <strong> YouTube Clone </strong> in ReactJs. The project used the
            YouTube API to get the videos. These videos are displayed to the
            user, showing all the details just as the original YouTube displays.
            To fetch real-time data from Google’s YouTube database, this project
            used Google’s YouTube v3 API.
          </p>
          <div className="links">
            <NavLink
              to="https://github.com/Srbhnegi1/youtube-clone"
              target="_blank"
            >
              <h5>GitHub</h5>
            </NavLink>
            <NavLink
              to="https://stirring-marigold-90984d.netlify.app/"
              target="_blank"
            >
              <h5>Live Demo</h5>
            </NavLink>
          </div>
          <div className="tags">
            <button>React</button>
            <button>TypeScript</button>
            <button>Youtube API</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="projectItem cryptoTracker">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/17/21/26/cryptocurrency-3409725_1280.jpg"
          alt="cryptoPhoto"
        />
        <div className="projectSummery">
          <h2>Crypto Tracker</h2>
          <p>
            The <strong>Crypto Tracker</strong> project is a web application
            built using ReactJs that allows users to track the real-time prices
            of various cryptocurrencies. It utilizes the CoinGecko API to fetch
            up-to-date market data for a wide range of cryptocurrencies,
            providing users with the latest information on price changes.
          </p>
          <div className="links">
            <NavLink
              to="https://github.com/Srbhnegi1/crypto-tracker"
              target="_blank"
            >
              <h5>GitHub</h5>
            </NavLink>
            <NavLink
              to="https://joyful-souffle-dc5c63.netlify.app/"
              target="_blank"
            >
              <h5>Live Demo</h5>
            </NavLink>
          </div>
          <div className="tags">
            <button>React</button>
            <button>TypeScript</button>
            <button>Coingecko API</button>
          </div>
          <hr />
        </div>
      </div>
      <div className="projectItem ecommerce">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683_1280.jpg"
          alt="ecommercePhoto"
        />
        <div className="projectSummery">
          <h2>E-Commerce </h2>
          <p>
            The <strong>E-Commerce</strong> project is a comprehensive web
            application developed using ReactJs that simulates an online store.
            The project utilizes Axios for making API requests to manage
            products and orders efficiently. The application is designed to be
            user-friendly and responsive, ensuring accessibility across
            different devices.
          </p>
          <div className="links">
            <NavLink
              to="https://github.com/Srbhnegi1/ecommerce"
              target="_blank"
            >
              <h5>GitHub</h5>
            </NavLink>
            <NavLink
              to="https://storied-lily-0920a3.netlify.app/"
              target="_blank"
            >
              <h5>Live Demo</h5>
            </NavLink>
          </div>
          <div className="tags">
            <button>React</button>
            <button>React Router</button>
            <button>Axios</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
