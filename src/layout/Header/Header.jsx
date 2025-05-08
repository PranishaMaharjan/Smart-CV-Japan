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
  useUser,
} from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
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
              <div
                className="user-info"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span>{user?.fullName}</span>
                <UserButton />
              </div>
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
