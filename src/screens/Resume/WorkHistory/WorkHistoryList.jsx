import { useDispatch, useSelector } from "react-redux";
import "./WorkHistory.scss";
import { selectWorkHistoryInfo } from "../../../redux/selectors/resumeSelectors";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { removeWorkHistoryInfo } from "../../../redux/slices/resumeSlice";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import { selectContactInfo } from "../../../redux/selectors/resumeSelectors";
import axios from "axios"; // or whatever you're using
import { useNavigate } from "react-router-dom";
import { submitContactInfo } from "../../../redux/slices/resumeSlice"; // import your action

const WorkHistoryList = () => {
  useResumeCompletionGuard();
  const workHistoryInfoData = useSelector(selectWorkHistoryInfo);
  const dispatch = useDispatch();
  const contactInfoData = useSelector(selectContactInfo);
  const navigate = useNavigate();
  const { contactInfo, loading, error, success } = useSelector(
    (state) => state.resume
  );

  const handleSubmitAndNext = (e) => {
    e.preventDefault(); // Prevent page reload / network call
    dispatch(submitContactInfo(contactInfo));
    navigate("/resume/certifications/add");
  };

  const handleDelete = (id) => {
    dispatch(removeWorkHistoryInfo(id));
  };

  return (
    <div className="resume-board-block resume-block-workhistory">
      <div className="resume-block-content">
        <div className="resume-summary">
          <div className="summary-list">
            {workHistoryInfoData?.map((workHistoryItem, index) => {
              return (
                <div key={workHistoryItem.id} className="summary-item">
                  <div className="summary-item-idx">{index + 1}</div>
                  <div className="summary-item-info">
                    <div className="summary-item-ttl">
                      <p>{workHistoryItem.jobTitle}</p>
                      <span>,&nbsp;</span>
                      <p>{workHistoryItem.employer}</p>
                    </div>
                    <div className="summary-item-detail">
                      <p>{workHistoryItem.location}</p>
                      <span className="summary-item-separator"></span>
                      <p>
                        <span>
                          {workHistoryItem.startDateMonth}&nbsp;{" "}
                          {workHistoryItem.startDateYear}
                        </span>
                        <span>&nbsp;-&nbsp;</span>
                        <span>
                          {workHistoryItem.endDateMonth}&nbsp;{" "}
                          {workHistoryItem.endDateYear}
                        </span>
                      </p>
                    </div>
                    <div
                      className="summary-item-description"
                      dangerouslySetInnerHTML={{
                        __html: workHistoryItem.description,
                      }}
                    ></div>
                  </div>
                  <div className="summary-item-actions">
                    <Link
                      to={`${routeConstants.RESUME_WORKHISTORY_EDIT}/${workHistoryItem.id}`}
                      className="action-btn"
                    >
                      <FaPencilAlt />
                    </Link>
                    <button
                      type="button"
                      className="action-btn"
                      onClick={() => handleDelete(workHistoryItem.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary-add">
            <Link
              to={routeConstants.RESUME_WORKHISTORY_ADD}
              className="summary-add-btn"
            >
              <span className="btn-icon">
                <FaPlus />
              </span>
              <span className="btn-text">Add another position</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="resume-block-bottom">
        <Link
          to="/resume/selectcvtype/add"
          className="resume-preview-btn btn btn-back btn-outline border-effect"
        >
          <span className="btn-text">Back</span>
        </Link>
        {/* <button
          onClick={handleSubmitAndNext}
          className="resume-next-btn btn btn-next border-effect"
        >
          <span className="btn-text">Next</span>
        </button> */}

        <button
          disabled={loading}
          onClick={handleSubmitAndNext}
          className="resume-next-btn btn btn-next border-effect"
        >
          <span className="btn-text">
            {loading ? "Submitting..." : "Submit"}
          </span>
        </button>
        {/* {error && <p>{error}</p>} */}
        {success && <p>Success!</p>}
      </div>
    </div>
  );
};

export default WorkHistoryList;
