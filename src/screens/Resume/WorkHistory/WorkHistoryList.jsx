import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WorkHistory.scss";
import {
  selectWorkHistoryInfo,
  selectContactInfo,
  selectEducationInfo,
} from "../../../redux/selectors/resumeSelectors";
import {
  removeWorkHistoryInfo,
  submitWorkHistoryInfo,
  submitContactInfo,
  submitEducationInfo,
} from "../../../redux/slices/resumeSlice";
import { useNavigate } from "react-router-dom";
import routeConstants from "../../../constants/routeConstants";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const WorkHistoryItem = ({ workHistoryItem, index, onDelete }) => {
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
              {workHistoryItem.endDateMonth}&nbsp; {workHistoryItem.endDateYear}
            </span>
          </p>
        </div>
        <div
          className="summary-item-description"
          dangerouslySetInnerHTML={{ __html: workHistoryItem.description }}
        />
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
          onClick={() => onDelete(workHistoryItem.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

const WorkHistoryList = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const workHistoryInfoData = useSelector(selectWorkHistoryInfo);
  const contactInfo = useSelector(selectContactInfo);
  const educationInfo = useSelector(selectEducationInfo);
  const { loading, error, success } = useSelector((state) => state.resume);
  const isSubmitting =
    loading.contactInfo || loading.educationInfo || loading.workHistoryInfo;

  const handleSubmitAndNext = async (e) => {
    e.preventDefault();

    // Log to verify the structure of contactInfo
    console.log("Submitting contact info:", contactInfo);

    // if (contactInfo !== null) {
    navigate("/resume/certifications/add");
    try {
      await dispatch(submitContactInfo(contactInfo)).unwrap();
      await dispatch(submitEducationInfo(educationInfo)).unwrap();
      await dispatch(submitWorkHistoryInfo(workHistoryInfoData)).unwrap();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    // } else {
    //   console.error("Invalid contact info:", contactInfo);
    // }
  };

  const handleDelete = (id) => {
    dispatch(removeWorkHistoryInfo(id));
  };

  return (
    <div className="resume-board-block resume-block-workhistory">
      <div className="resume-block-content">
        <div className="resume-summary">
          <div className="summary-list">
            {workHistoryInfoData?.map((workHistoryItem, index) => (
              <WorkHistoryItem
                key={workHistoryItem.id}
                workHistoryItem={workHistoryItem}
                index={index}
                onDelete={handleDelete}
              />
            ))}
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
        <button
          disabled={isSubmitting}
          onClick={handleSubmitAndNext}
          className="resume-next-btn btn btn-next border-effect"
        >
          <span className="btn-text">
            {isSubmitting ? "Submitting..." : "Next"}
          </span>
        </button>
        {error && <p>{error}</p>}
        {success && <p>Success!</p>}
      </div>
    </div>
  );
};

export default WorkHistoryList;
