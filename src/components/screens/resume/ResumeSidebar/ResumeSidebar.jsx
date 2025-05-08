import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Images } from "../../../../assets/images";
import "./ResumeSidebar.scss";

const ResumeSidebar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="resume-sidebar">
      <Link to="/" className="site-brand">
        <img src="/LogoJapan.png" alt="" />
      </Link>

      <div className="sidebar-steps">
        <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/selectcvtype")
                ? "active"
                : ""
            }`}
          >
            01 <p className="step-item-text">Your CV Type</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/personaldetails/add")
                ? "active"
                : ""
            }`}
          >
            02 <p className="step-item-text">Personal Details</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/certifications/add")
                ? "active"
                : ""
            }`}
          >
            03<p className="step-item-text">Certifications</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/introvideo/add")
                ? "active"
                : ""
            }`}
          >
            04 <p className="step-item-text">Introduction Video</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        {/* <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/summary") ? "active" : ""
            }`}
          >
            5<p className="step-item-text">Summary</p>
          </div>
          <div className="step-item-line"></div>
        </div> */}
        {/* <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname.startsWith("/resume/extra") ? "active" : ""
            }`}
          >
            6<p className="step-item-text">Finalize</p>
          </div>
          <div className="step-item-line"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ResumeSidebar;
