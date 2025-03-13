import { Link } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import "./Summary.scss";

const SummaryTips = () => {
  useResumeCompletionGuard();
  return (
    <div className="resume-board-block resume-block-summary">
      <ResumeTop goBackRoute={routeConstants.RESUME_SKILL_ADD} />
      <div className="resume-block-content">
        <div className="tips-row">
          <div className="resume-tips-info">
            <h3 className="tips-info-subttl">
              Finally, let&apos;s work on your
            </h3>
            <h2 className="tips-info-ttl">Summary</h2>
            <p className="tips-list-head">Here&apos;s what you need to know:</p>
            <ul className="tips-list">
              <li>
                Your summary shows employers you&apos;re right for their job.
              </li>
              <li>
                We&apos;ll help you writie a great one with expert content you
                can customize.
              </li>
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
        <Link
          to={routeConstants.RESUME_SUMMARY_ADD}
          className="resume-next-btn btn btn-orange border-effect"
        >
          <span className="btn-text">Next</span>
        </Link>
      </div>
    </div>
  );
};

export default SummaryTips;
