import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ResumeTop.scss";
import { PropTypes } from "prop-types";

const ResumeTop = ({ goBackRoute }) => {
  return (
    <div className="resume-block-top">
      <Link to={goBackRoute} className="link link-blue">
        <span className="link-icon">
          <FaArrowLeft size={12} />
        </span>
        <span className="link-text">Go Back</span>
      </Link>
    </div>
  );
};

export default ResumeTop;

ResumeTop.propTypes = {
  goBackRoute: PropTypes.string,
};
