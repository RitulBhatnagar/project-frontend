import "./home.css";
import image from "../../assets/image 3.jpg"
import ellipse from "../../assets/Ellipse 1.png"
import logo from "../../assets/Group.png"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="image-3-frame">
      <img className="image-3-icon5" alt="" src = {image} />
      <button className="group-button">
        <button className="rectangle-button" />
        <div className="register-for-60">Register for 60 Day Trial</div>
      </button>
      <button className="rectangle-parent14">
        <button className="group-child40" />
        <button className="know-more" >
          Know More
        </button>
      </button>
      <Link to = "/signIn">
      <button className="rectangle-parent15">
        <button className="group-child41"  />
        <div className="sign-in6">
          
          Sign In
          </div>
      </button>
      </Link>

      <div className="audit-automation-for">
        Audit Automation for Professional Service Organizations
      </div>
      <div className="effectively-manage-your">
        Effectively manage your Data and Audit with best-in-class analytics and
        visualizations
      </div>
      <div className="the-most-advanced-container">
        <span>{`The most advanced `}</span>
        <span className="analytics-driven">analytics-driven</span>
        <span> Audit Software</span>
      </div>
      <img className="frame-child23" alt="" src= {ellipse} />
      <img className="group-icon2" alt="" src = {logo} />
    </div>
  );
};

export default Home;
