import { Link } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import "./WorkHistory.scss";
import { useSelector } from "react-redux";
import { selectWorkHistoryInfo } from "../../../redux/selectors/resumeSelectors";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const WorkHistoryTips = () => {
  useResumeCompletionGuard();
  const workHistoryInfoData = useSelector(selectWorkHistoryInfo);
  return (
    <div className="resume-board-block resume-block-workhistory">
      <ResumeTop goBackRoute={routeConstants.RESUME_EDUCATION_LIST} />
      <div className="resume-block-content">
        <div className="tips-row">
          <div className="resume-tips-info">
            <h4 className="tips-info-subttl">Now, let&apos;s fill out your</h4>
            <h2 className="tips-info-ttl">Work history</h2>
            <p className="tips-list-head">Here’s what you need to know:</p>
            <ul className="tips-list">
              <li>
                You can include any work experience, internships, scholarships,
                relevant coursework and academic achievements.
              </li>
              <li></li>
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
        {workHistoryInfoData?.length > 0 ? (
          <Link
            to={routeConstants.RESUME_WORKHISTORY_LIST}
            className="resume-next-btn btn btn-orange border-effect"
          >
            <span className="btn-text">Next</span>
          </Link>
        ) : (
          <Link
            to={routeConstants.RESUME_WORKHISTORY_ADD}
            className="resume-next-btn btn btn-orange border-effect"
          >
            <span className="btn-text">Next</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkHistoryTips;
