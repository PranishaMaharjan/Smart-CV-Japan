// export default Header;
import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import FAQ from "../../components/screens/home/FAQ/FAQ";
import "./Header.scss";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="pg-header">
      <div className="container">
        <div className="header-wrap">
          <Link to="/" className="site-brand">
            <img src="src/assets/images/LogoJapan.png" alt="" />
          </Link>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/templates">Templates</Link>
              </li> */}
              <li className="nav-item">
                <Link to="">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">Contact</Link>
              </li>
            </ul>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <Link to="/login" className="resume-btn">
                Login
              </Link>
            </SignedOut>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
