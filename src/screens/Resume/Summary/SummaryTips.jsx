import { Link } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import "./Summary.scss";

const SummaryTips = () => {
  useResumeCompletionGuard();
  return (
    <div className="resume-board-block resume-block-summary">
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
    </div>
  );
};

export default SummaryTips;
