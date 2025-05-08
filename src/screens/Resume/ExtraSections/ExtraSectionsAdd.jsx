import { Field, FieldArray, Form, Formik } from "formik";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectExtraInfo } from "../../../redux/selectors/resumeSelectors";
import {
  FaMinusCircle,
  FaPlus,
  FaRegStar,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./ExtraSections.scss";
import { useEffect, useState } from "react";
import { addOrUpdateExtraInfo } from "../../../redux/slices/resumeSlice";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import { Link } from "react-router-dom";

const ExtraSectionsAdd = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const extraInfo = useSelector(selectExtraInfo);
  const [errors, setErrors] = useState({
    languages: null,
    hobbies: null,
    certifications: null,
    portfolios: null,
  });

  const initialValues = {
    languages: extraInfo.languages || [{ id: uuidv4(), name: "", rating: 0 }],
    hobbies: extraInfo.hobbies || [{ id: uuidv4(), name: "" }],
    portfolios: extraInfo.portfolios || [{ id: uuidv4(), name: "" }],
    certifications: extraInfo.certifications || [
      { id: uuidv4(), name: "", date: "" },
    ],
  };

  const addArrayItem = (arrayHelpers, values, field) => {
    const id = uuidv4();
    let errorMessage = null;

    const isEmptyField = values[field].some((item) => !item.name.trim());
    if (isEmptyField) {
      errorMessage = "Please fill existing field before adding another.";
    }

    if (errorMessage) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
      if (
        field === "languages" ||
        field === "hobbies" ||
        field === "portfolios"
      ) {
        arrayHelpers.push({ id, name: "" });
      } else if (field === "certifications") {
        arrayHelpers.push({ id, name: "", date: "" });
      }
    }
  };

  const addOrUpdateData = (values) => {
    const extraInfoData = {};
    Object.keys(values).forEach((key) => {
      extraInfoData[key] = values[key].filter(
        (item) => item.name.trim() !== ""
      );
    });
    console.log(extraInfoData);
    dispatch(addOrUpdateExtraInfo(extraInfoData));
    navigate(routeConstants.RESUME_INTROVIDEO);
  };

  useEffect(() => {
    const clearError = setTimeout(() => {
      setErrors({ languages: null, hobbies: null });
    }, 2000);
    return () => clearTimeout(clearError);
  }, [errors]);

  return (
    <Formik initialValues={initialValues} onSubmit={addOrUpdateData}>
      {({ values }) => (
        <Form>
          <div className="resume-block-bottom">
            <button>
              <Link
                to="/resume/personaldetails/add"
                className="resume-preview-btn btn btn-back btn-outline border-effect"
              >
                <span className="btn-text">Back</span>
              </Link>
            </button>

            <button
              type="submit"
              className="resume-next-btn btn btn-next border-effect"
            >
              <span className="btn-text">Next</span>
            </button>
          </div>
          {/* </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default ExtraSectionsAdd;
