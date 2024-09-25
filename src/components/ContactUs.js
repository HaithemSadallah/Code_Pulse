import Navbar from "./Navbar";
import "./../Css/contact_us.css";

const ContactUs = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="contact_us_green">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div
              className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
              id="ifgi"
            >
              <div className="container-box">
                <div className="text-content">
                  <h3 className="text-blk contactus-head">Contact info</h3>
                  <p className="text-blk contactus-subhead">
                  For any questions or inquiries, contact us through these sites:
                  </p>
                </div>
                <div className="workik-contact-bigbox">
                  <div className="workik-contact-box">
                    <div className="phone text-box">
                      <img
                        className="contact-svg"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                        alt="Phone Icon"
                      />
                      <p className="contact-text">+213 0665497063</p>
                    </div>

                 
                    <div className="social-media-links middle-icon">
                      <a
                        href="https://www.facebook.com/profile.php?id=61563372300247"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="social-svg facebook-icon"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                          alt="Facebook"
                        />
                      </a>
                      <p className="contact-text">Link</p>
                    </div>

                    <div className="mail text-box">
                      <img
                        className="contact-svg"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                        alt="Mail Icon"
                      />
                      <p className="contact-text">bakourabdALi28@gmail.com</p>
                    </div>
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

export default ContactUs;
