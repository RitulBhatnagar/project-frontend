import "./home2.css";
import image from "../../assets/image 3.jpg"
import ellipse from "../../assets/Ellipse 1.png"
import logoHome from "../../assets/logoHome.png"
import {Link} from "react-router-dom"
import homeImg from "../../assets/homeImg.png"
const Home = () => {
  return (
    <div className="operation">
      {/* <img className="bg-img" alt="" src = {image} /> */}
    <div className="top-bar">
      <img src = {logoHome} alt = ""/>
      <div className="btn-container">
        <button className="gradient">
          Register For 60 days
        </button>
        <Link to = "/signIn">
        <button className="signIn">
          Sign In
        </button>
        </Link>
      </div>
     
    </div>
    <div className="banner">
        <div className="banner-heading">
          <h1>
          Audit Automation for Professional Service Organisations
          </h1>
          <p>
          Effectively manage your Data and Audit with best-in-class analytics and visualizations
          </p>
          <button className="gradient">
            Know More
          </button>
        </div>
        <div className = "banner-img">
          <img src = {homeImg} alt = ""/>
        </div>
      </div>
      <div className="last-heading">
        <p>The most advanced <span className="yellowClass"> analytics-driven </span>Audit Software</p>
      </div>
    </div>
  );
};

export default Home;
