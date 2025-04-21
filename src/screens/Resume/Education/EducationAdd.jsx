import { Field, Form, Formik } from "formik";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import "./Education.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEducationInfo } from "../../../redux/slices/resumeSlice";
import { FaCaretDown } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import EducationInfoValidationSchema from "../../../forms/EducationInfoValidationSchema";
import FormField from "../../../components/common/FormField";
import useYearRange from "../../../hooks/useYearRange";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import routeConstants from "../../../constants/routeConstants";

const EducationAdd = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startOffset = 20;
  const endOffset = 10;
  const years = useYearRange(startOffset, endOffset);

  const initialState = {
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    graduationMonth: "",
    graduationYear: "",
  };

  const saveEducationInfo = (values, { setSubmitting }) => {
    try {
      const id = uuidv4();
      const educationInfoData = { id, ...values };
      dispatch(addEducationInfo(educationInfoData));
      navigate("/resume/personaldetails/add");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={EducationInfoValidationSchema}
      onSubmit={saveEducationInfo}
      validateOnMount
    >
      {({ errors, touched }) => (
        <Form>
          <div className="resume-board-block resume-block-education">
            <div className="resume-block-content">
              <div className="resume-block-container">
                <p className="resume-block-lead">
                  Educational Background / 学歴
                </p>
                <hr />

                <div className="resume-subttl">
                  <p className="resume-subttl-text">
                    <img src="../../src/assets/icons/information-square.png"></img>
                    List your degrees, institutions, and graduation years.
                    Highlight relevant coursework or achievements that align
                    with the job role. Keep it concise and impactful.
                  </p>
                </div>

                <div className="resume-row">
                  <div className="resume-form">
                    <p className="form-hint">*indicates a required field</p>
                    <div className="form-elems-wrap">
                      <div className="resume-block-bottom-add">
                        <button
                          type="submit"
                          className="resume-next-btn btn border-effect"
                        >
                          <img src="../../src/assets/icons/add-circle.png"></img>
                          <span className="btn-text">Add Education</span>
                        </button>
                      </div>
                      <div className="form-elem-cols-2">
                        <FormField
                          label="School Name"
                          placeholder="e.g. University of Texas"
                          name="schoolName"
                          errors={errors}
                          touched={touched}
                        />
                        <FormField
                          label="School Location"
                          placeholder="e.g. Cebu City, Cebu, Philippines"
                          name="schoolLocation"
                          errors={errors}
                          touched={touched}
                        />
                      </div>

                      <div className="form-elem-cols-2">
                        <FormField
                          label="Degree"
                          placeholder="e.g. Bachelor of Arts"
                          name="degree"
                          errors={errors}
                          touched={touched}
                        />
                      </div>

                      <div className="form-elem-cols-2">
                        <FormField
                          label="Field of Study"
                          placeholder="e.g. Arts & Humanities"
                          name="fieldOfStudy"
                          errors={errors}
                          touched={touched}
                        />
                        <div className="form-elem">
                          <label htmlFor="" className="form-lbl">
                            Graduation Date (Or Expected Graduation Date)
                          </label>
                          <div className="form-ctrl-cols-2">
                            <div className="form-ctrl-wrap">
                              <Field
                                as="select"
                                name="graduationMonth"
                                className="form-ctrl"
                              >
                                <option value="">Select Month</option>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const monthName = new Date(
                                    0,
                                    index
                                  ).toLocaleString("en", { month: "long" });
                                  return (
                                    <option key={index} value={monthName}>
                                      {monthName}
                                    </option>
                                  );
                                })}
                              </Field>
                              <span className="select-icon">
                                <FaCaretDown />
                              </span>
                              {errors.graduationMonth &&
                                touched.graduationMonth && (
                                  <p className="error-text">
                                    {errors.graduationMonth}
                                  </p>
                                )}
                            </div>
                            <div className="form-ctrl-wrap">
                              <Field
                                as="select"
                                name="graduationYear"
                                className="form-ctrl"
                              >
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </Field>
                              <span className="select-icon">
                                <FaCaretDown />
                              </span>
                              {errors.graduationYear &&
                                touched.graduationYear && (
                                  <p className="error-text">
                                    {errors.graduationYear}
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EducationAdd;
