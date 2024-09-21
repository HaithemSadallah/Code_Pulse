import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./../Css/style.css";
const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div id="home-section">
          <div className="header-section">
            <h6 className="line"> Welcome to our Agency </h6>
            <h2 className="mt-3">
              Smart Ideas for your <br /> Brand are Here
            </h2>
            <h6 className="line1">
              Your trusted partner in the development of intelligent and modern
              mobile and
              <br />
              web applications.
            </h6>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="footer">
          <div id="about-section">
            <h6 className="line2"> About Our Company</h6>
            <h2>
              We are committed to provid our <br />
              customers with exceptional service.
            </h2>
            <h6 className="fw-light">
              We provide multiple services starting from mobile application and
              full on websites to <br />
              <br /> graphic design and marketing while
            </h6>
            <br />
            <ul className="fw-bolder">
              <li>Outstanding Pricing plans</li>
              <br />
              <li>Best Practises for working Products</li>
              <br />
              <li>Perfection is our specialty</li>
            </ul>

            <Link to="/our_work">
              <button className="btn btn-outline-primary">OUR WORK</button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="service-section">
          <div className="Service">
            <h5 className="line3">Our Service</h5>
            <h2>This is What We Do</h2>
            <h6 className="fw-light">
              We have all the services you need to provide fast, modern, and
              functioning projects.
            </h6>

            <div className="carte-container">
              <div className="carte">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Ui/Ux Design</h5>
                    <p className="card-text">
                      We plan Ui/Ux design plans depending on your needs to
                      provide the best user experience to attract more movement
                      into your business.
                      
                     
                    </p>
                  </div>
                </div>
              </div>

              <div className="carte">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      We adapt to your business model starting from e-commerce
                      solutions to personalized web applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carte">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">
                      we've been trusted by global brands and disruptive
                      startups to deliver world-class mobile experiance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
