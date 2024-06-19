import "./Home.css";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div>
          <h2>
            Hello I'm <span>Saurabh Negi</span>
          </h2>
          <h3>FrontEnd Developer.</h3>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
            alt="myImage"
            className="image"
          />
          <p>
            Passionate Front-end Developer on a mission to make the web <br />
            more beautiful, with a toolbox filled with HTML, CSS, JavaScript,
            <br />
            React and TypeScript etc. Let's build something extraordinary.
          </p>
        </div>
      </div>
      <div className="skills">
        <p>My Skills</p>
        <img
          src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
          alt="htmllogo"
        />
        <img
          src="https://camo.githubusercontent.com/b9714180de7437a8f4da9f998b998101ce0d73cef3df55b0c0400cecc219e348/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"
          alt="cssLogo"
        />
        <img
          src="https://www.ankitweblogic.com/javascript/js_img/javascript.png"
          alt="jslogo"
        />
        <img
          src="https://titrias.com/files/2022/04/typescript.png"
          alt="tslogo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react logo"
        />
        <img
          src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*5g3mp6zgIoqprOgV.png"
          alt="gitlogo"
        />
        <img
          src="https://bitperfect.at/assets/blog-images/Headerbild-Was-ist-GitHub-v2.png"
          alt="githublogo"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
