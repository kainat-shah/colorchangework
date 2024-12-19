import "./footer.css";
import locationIcon from "../images/Vector.png"
import phoneIcon from "../images/phone.png";
import mailIcon from "../images/mail.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="column">
              <h3>Contact Us</h3>
              <ul className="contact">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Bahadurabad,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.889076,67.0723468,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33ec36af7317b:0xb727b79b354952a5!8m2!3d24.8897483!4d67.0740126!16s%2Fg%2F11f36vvhqb?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={locationIcon} alt="Location" /> Address
                  </a>
                </li>
                <li>
                  <a href="tel:02152956284">
                    <img src={phoneIcon} alt="Phone" /> 02152956284
                  </a>
                </li>
                <li>
                  <a href="mailto:keto@gmail.com">
                    <img src={mailIcon} alt="Email" /> Thepalm@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Menu Link</h3>
              <ul className="pages-link">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="./pages/gallery/index.html">Gallery</a>
                </li>
                <li>
                  <a href="./pages/About/About/index.html">About Us</a>
                </li>
                <li>
                  <a href="./pages/food/food/index.html">Food</a>
                </li>
                <li>
                  <a href="./pages/faqfinal/accordian.html">FAQs</a>
                </li>
                <li>
                  <a href="./pages/contact/contact/index.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>News Letter</h3>
              <form className="form">
                <input
                  className="email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  required
                />
                <button className="btnn" type="submit">
                  Subscribe
                </button>
              </form>
              <ul className="logo">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook fb"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container2">
            <div className="row">
              <p>
                © 2023 All Rights Reserved.
                <br />
                Design by <a href="index.html">The Palm</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
