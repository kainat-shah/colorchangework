import "./header.css";
import exampleImage from '../images/very-final-logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="/"> 
              <img src={exampleImage} alt="logo" />
            </a>
          </div>
          <div className="menubar">
            <nav>
              <ul className="list">
                <li className="active">
                  <a className="anchor" href="/">Home</a>
                </li>
                <li>
                  <a className="anchor" href="/about">About</a>
                </li>
                <li>
                  <a className="anchor" href="/gallery">Gallery</a>
                </li>
                <li>
                  <a className="anchor" href="/faqs">FAQs</a>
                </li>
                <li>
                  <a className="anchor" href="/food">Food</a>
                </li>
                <li>
                  <a className="anchor1" href="/contact">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
