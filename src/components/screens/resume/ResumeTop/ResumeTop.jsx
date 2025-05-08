import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ResumeTop.scss";
import { PropTypes } from "prop-types";
import { Images } from "../../../../assets/images";
const ResumeTop = ({ goBackRoute }) => {
  return (
    <div className="resume-block-top">
      <Link to={goBackRoute} className="link link-blue">
        {/* <img src="src/assets/images/arrow-left-double.png"></img> */}
        <span className="link-text">Dashboard</span>
      </Link>
    </div>
  );
};

export default ResumeTop;

ResumeTop.propTypes = {
  goBackRoute: PropTypes.string,
};
