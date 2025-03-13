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
    navigate(routeConstants.RESUME_PREVIEW);
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
          <div className="resume-board-block resume-block-extra">
            <ResumeTop goBackRoute={routeConstants.RESUME_SUMMARY_ADD} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">
                Do you have anything else to add?
              </h2>
              <p className="resume-block-lead">These sections are optional.</p>
              <div className="form-block-group">
                <div className="form-block-item">
                  <label htmlFor="languages" className="form-block-lbl">
                    What languages can you speak?
                  </label>
                  <FieldArray name="languages">
                    {(arrayHelpers) => (
                      <>
                        <div className="resume-row">
                          <div className="form-elems-wrap">
                            {values.languages?.map((language, index) => (
                              <div className="form-elem" key={index}>
                                <div className="form-rating">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      arrayHelpers.replace(index, {
                                        ...language,
                                        rating: 0,
                                      })
                                    }
                                    className="skill-rating-btn"
                                  >
                                    <FaMinusCircle size={20} />
                                  </button>
                                  <div className="rating-stars">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <button
                                        type="button"
                                        key={i}
                                        className="star-btn"
                                        onClick={() =>
                                          arrayHelpers.replace(index, {
                                            ...language,
                                            rating: i + 1,
                                          })
                                        }
                                      >
                                        {i + 1 <= language.rating ? (
                                          <FaStar size={20} />
                                        ) : (
                                          <FaRegStar size={20} />
                                        )}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div className="form-ctrl-wrap">
                                  <Field
                                    type="text"
                                    name={`languages.${index}.name`}
                                    className="form-ctrl"
                                    placeholder="e.g. English"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                  className="skill-delete-btn"
                                >
                                  <FaTrash size={20} />
                                </button>
                              </div>
                            ))}
                            {errors.languages && (
                              <div className="error-message">
                                {errors.languages}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="summary-add">
                          <button
                            type="button"
                            className="summary-add-btn"
                            onClick={() =>
                              addArrayItem(arrayHelpers, values, "languages")
                            }
                          >
                            <span className="btn-icon">
                              <FaPlus />
                            </span>
                            <span className="btn-text">Add Language</span>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>

                <div className="form-block-item">
                  <label htmlFor="hobbies" className="form-block-lbl">
                    What interests do you have?
                  </label>
                  <FieldArray name="hobbies">
                    {(arrayHelpers) => (
                      <>
                        <div className="resume-row">
                          <div className="form-elems-wrap">
                            {values.hobbies?.map((hobby, index) => (
                              <div className="form-elem" key={index}>
                                <div className="form-ctrl-wrap">
                                  <Field
                                    type="text"
                                    name={`hobbies.${index}.name`}
                                    className="form-ctrl"
                                    placeholder="e.g. Travelling"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                  className="delete-btn"
                                >
                                  <FaTrash size={20} />
                                </button>
                              </div>
                            ))}
                            {errors.hobbies && (
                              <div className="error-message">
                                {errors.hobbies}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="summary-add">
                          <button
                            type="button"
                            className="summary-add-btn"
                            onClick={() =>
                              addArrayItem(arrayHelpers, values, "hobbies")
                            }
                          >
                            <span className="btn-icon">
                              <FaPlus />
                            </span>
                            <span className="btn-text">Add Hobby</span>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>

                <div className="form-block-item">
                  <label htmlFor="certifications" className="form-block-lbl">
                    What certifications do you have?
                  </label>
                  <FieldArray name="certifications">
                    {(arrayHelpers) => (
                      <>
                        <div className="resume-row">
                          <div className="form-elems-wrap">
                            {values.certifications?.map(
                              (certification, index) => (
                                <div className="form-elem" key={index}>
                                  <div className="form-ctrl-wrap">
                                    <Field
                                      type="date"
                                      name={`certifications.${index}.date`}
                                      className="form-ctrl"
                                    />
                                  </div>
                                  <div className="form-ctrl-wrap">
                                    <Field
                                      type="text"
                                      name={`certifications.${index}.name`}
                                      className="form-ctrl"
                                      placeholder="Accounting Training"
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                    className="delete-btn"
                                  >
                                    <FaTrash size={20} />
                                  </button>
                                </div>
                              )
                            )}
                            {errors.certifications && (
                              <div className="error-message">
                                {errors.certifications}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="summary-add">
                          <button
                            type="button"
                            className="summary-add-btn"
                            onClick={() =>
                              addArrayItem(
                                arrayHelpers,
                                values,
                                "certifications"
                              )
                            }
                          >
                            <span className="btn-icon">
                              <FaPlus />
                            </span>
                            <span className="btn-text">Add Certification</span>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>

                <div className="form-block-item">
                  <label htmlFor="portfolios" className="form-block-lbl">
                    Websites, Portfolios, Profiles
                  </label>
                  <FieldArray name="portfolios">
                    {(arrayHelpers) => (
                      <>
                        <div className="resume-row">
                          <div className="form-elems-wrap">
                            {values.portfolios?.map((portfolio, index) => (
                              <div className="form-elem" key={index}>
                                <div className="form-ctrl-wrap">
                                  <Field
                                    type="text"
                                    name={`portfolios.${index}.name`}
                                    className="form-ctrl"
                                    placeholder="e.g. github.com/yourname"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                  className="delete-btn"
                                >
                                  <FaTrash size={20} />
                                </button>
                              </div>
                            ))}
                            {errors.portfolios && (
                              <div className="error-message">
                                {errors.portfolios}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="summary-add">
                          <button
                            type="button"
                            className="summary-add-btn"
                            onClick={() =>
                              addArrayItem(arrayHelpers, values, "portfolios")
                            }
                          >
                            <span className="btn-icon">
                              <FaPlus />
                            </span>
                            <span className="btn-text">Add Portfolios</span>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>
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
              <button
                type="submit"
                className="resume-next-btn btn btn-orange border-effect"
              >
                <span className="btn-text">Next:Finalize</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExtraSectionsAdd;
