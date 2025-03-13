import { Link } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import "./Skill.scss";

const SkillTips = () => {
  return (
    <div className="resume-board-block resume-block-skill">
      <ResumeTop goBackRoute={routeConstants.RESUME_WORKHISTORY_LIST} />
      <div className="resume-block-content">
        <div className="tips-row">
          <div className="resume-tips-info">
            <h4 className="tips-info-subttl">
              Next, let&apos; take care of your
            </h4>
            <h2 className="tips-info-ttl">Skills</h2>
            <p className="tips-list-head">Here&apos;s what you need to know:</p>
            <ul className="tips-list">
              <li>Employers scan skills for relevant keywords.</li>
              <li>We&apos;ll help you choose the best ones.</li>
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
            to={routeConstants.RESUME_SKILL_ADD}
            className="resume-next-btn btn btn-orange border-effect"
          >
            <span className="btn-text">Next</span>
          </Link>
      </div>
    </div>
  );
};

export default SkillTips;
