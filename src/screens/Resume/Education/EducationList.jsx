import { useDispatch, useSelector } from "react-redux";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import { selectEducationInfo } from "../../../redux/selectors/resumeSelectors";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { removeEducationInfo } from "../../../redux/slices/resumeSlice";
import routeConstants from "../../../constants/routeConstants";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const EducationList = () => {
  useResumeCompletionGuard();
  const educationInfoData = useSelector(selectEducationInfo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeEducationInfo(id));
  };

  return (
    <div className="resume-board-block resume-block-education">
      <ResumeTop goBackRoute={"/resume/education/tips"} />
      <div className="resume-block-content">
        <div className="resume-summary">
          <h3 className="summary-list-ttl">Education Summary</h3>
          <div className="summary-list">
            {educationInfoData?.map((educationItem, index) => {
              return (
                <div key={educationItem.id} className="summary-item">
                  <div className="summary-item-idx">{index + 1}</div>
                  <div className="summary-item-info">
                    <div className="summary-item-ttl">
                      <p>{educationItem.degree}</p>
                      <p>{educationItem.schoolName}</p>
                      <span className="summary-item-separator"></span>
                      <p>{educationItem.fieldOfStudy}</p>
                    </div>
                    <div className="summary-item-detail">
                      <p>{educationItem.schoolLocation}</p>
                      <span className="summary-item-separator"></span>
                      <p>Expected in {educationItem.graduationMonth}</p>
                      <p>{educationItem.graduationYear}</p>
                    </div>
                  </div>
                  <div className="summary-item-actions">
                    <Link
                      to={`${routeConstants.RESUME_EDUCATION_EDIT}/${educationItem.id}`}
                      className="action-btn"
                    >
                      <FaPencilAlt />
                    </Link>
                    <button
                      type="button"
                      className="action-btn"
                      onClick={() => handleDelete(educationItem.id)}
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
              to={routeConstants.RESUME_EDUCATION_ADD}
              className="summary-add-btn"
            >
              <span className="btn-icon">
                <FaPlus />
              </span>
              <span className="btn-text">Add another education</span>
            </Link>
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
          to="/resume/workhistory/tips"
          className="resume-next-btn btn btn-orange border-effect"
        >
          <span className="btn-text">Next: Work history</span>
        </Link>
      </div>
    </div>
  );
};

export default EducationList;
