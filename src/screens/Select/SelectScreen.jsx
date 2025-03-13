import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../assets/images";
import "./SelectScreen.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RESET_RESUME } from "../../redux/slices/resumeSlice";
import { selectResume } from "../../redux/selectors/resumeSelectors";
import { isObjectEmpty } from "../../utils/helper";
import routeConstants from "../../constants/routeConstants";

const SelectScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resumeData = useSelector(selectResume);

  const handleResumeCreate = async () => {
    await dispatch(RESET_RESUME());
    navigate(routeConstants.RESUME_CONTACT);
  };

  const handleResumeContinue = () => {
    navigate(routeConstants.RESUME_CONTACT);
  };

  return (
    <div className="pg-sel-resume">
      <section className="sel-resume-block">
        <div className="container">
          <div className="sel-resume-wrap">
            <h3 className="sel-resume-ttl">
              How do you want to build your resume?
            </h3>

            <div className="sel-resume-opts">
              <button
                type="button"
                className="resume-opt-item"
                onClick={handleResumeCreate}
              >
                <img className="resume-opt-icon" src={Images.Write} alt="" />
                <h4 className="resume-opt-ttl">Create a new resume</h4>
                {isObjectEmpty(resumeData) ? (
                  <p className="resume-opt-lead">
                    You can create a new resume with stepwise guidance.
                  </p>
                ) : (
                  <p className="resume-opt-lead">
                    You can start new but old content will be deleted.
                  </p>
                )}
              </button>
              {!isObjectEmpty(resumeData) && (
                <button
                  type="button"
                  className="resume-opt-item"
                  onClick={handleResumeContinue}
                >
                  <img className="resume-opt-icon" src={Images.Write} alt="" />
                  <h4 className="resume-opt-ttl">Continue editing resume</h4>
                  <p className="resume-opt-lead">
                    You can continue with your existing resume.
                  </p>
                </button>
              )}
            </div>
            <div className="sel-resume-btns">
              <Link
                to={routeConstants.HOW_IT_WORKS}
                className="btn btn-outline btn-oxford-blue"
              >
                <span className="btn-icon">
                  <FaArrowLeft />
                </span>
                <div className="btn-text">Back</div>
              </Link>
              <Link
                to={routeConstants.RESUME_CONTACT}
                className="btn btn-orange"
              >
                <span className="btn-text">Next</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectScreen;
