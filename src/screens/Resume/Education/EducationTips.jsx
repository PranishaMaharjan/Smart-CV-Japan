import { Link } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import "./Education.scss";
import { useSelector } from "react-redux";
import { selectEducationInfo } from "../../../redux/selectors/resumeSelectors";
import routeConstants from "../../../constants/routeConstants";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const EducationTips = () => {
  useResumeCompletionGuard();
  const educationInfoData = useSelector(selectEducationInfo);

  return (
    <div className="resume-board-block resume-block-education">
      <ResumeTop goBackRoute={routeConstants.RESUME_CONTACT} />
      <div className="resume-block-content">
        <div className="tips-row">
          <div className="resume-tips-info">
            <h3 className="tips-info-subttl">Great, let&apos;s work on your</h3>
            <h2 className="tips-info-ttl">Education</h2>
            <p className="tips-list-head">Here’s what you need to know:</p>
            <ul className="tips-list">
              <li>Employers quickly scan the education section.</li>
              <li>We’ll take care of the formatting so it’s easy to find.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-block-bottom">
        <button
          type="button"
          className="resume-preview-btn btn btn-oxford-blue btn-outline border-effect"
        >
          <span className="btn-text">Preview</span>
        </button>
        {educationInfoData?.length > 0 ? (
          <Link
            to={routeConstants.RESUME_EDUCATION_LIST}
            className="resume-next-btn btn btn-orange border-effect"
          >
            <span className="btn-text">Next</span>
          </Link>
        ) : (
          <Link
            to={routeConstants.RESUME_EDUCATION_ADD}
            className="resume-next-btn btn btn-orange border-effect"
          >
            <span className="btn-text">Next</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EducationTips;
