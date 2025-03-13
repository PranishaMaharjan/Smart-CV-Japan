import { Link } from "react-router-dom";
import "./Footer.scss";
import { Images } from "../../assets/images";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-items">
            <div className="footer-item">
              <Link to="/" className="footer-item-brand">
                <img src="src/assets/images/LogoJapan.png" alt="" />
              </Link>
              <p className="footer-item-lead">
                Professional templates with real time editing, instantly
                customize and downloads your own design in minutes.
              </p>

              <Link to="/how_it_works" className="btn">
                <span className="btn-icon">{/* <CgNotes size={24} /> */}</span>
                <span className="btn-text">Create my CV</span>
              </Link>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Quick Links</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">About Us</Link>
                </li>
                <li className="link-item">
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Support</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">Help and Support</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Steps to create your CV</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Policies</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Privacy Policies</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Follow Us</p>
              <ul className="social-links">
                <li className="link-item">
                  <Link to="/">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="last-container">
        <p className="footer-bottom-text">
          &copy; {currentYear}, Smart CV Japan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
