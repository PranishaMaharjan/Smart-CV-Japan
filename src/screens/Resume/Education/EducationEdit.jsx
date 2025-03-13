import { Field, Form, Formik } from "formik";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import "./Education.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEducationInfo } from "../../../redux/slices/resumeSlice";
import { FaCaretDown } from "react-icons/fa6";
import EducationInfoValidationSchema from "../../../forms/EducationInfoValidationSchema";
import { selectEducationInfoById } from "../../../redux/selectors/resumeSelectors";
import useYearRange from "../../../hooks/useYearRange";
import FormField from "../../../components/common/FormField";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const EducationEdit = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startOffset = 20;
  const endOffset = 10;
  const years = useYearRange(startOffset, endOffset);

  const { id } = useParams();
  const education = useSelector((state) => selectEducationInfoById(state, id));

  const initialState = {
    schoolName: education.schoolName || "",
    schoolLocation: education.schoolLocation || "",
    degree: education.degree || "",
    fieldOfStudy: education.fieldOfStudy || "",
    graduationMonth: education.graduationMonth || "",
    graduationYear: education.graduationYear || "",
  };

  const updateData = (values, { setSubmitting }) => {
    try {
      const educationInfoData = values;
      dispatch(updateEducationInfo({ id, data: educationInfoData }));
      navigate("/resume/education/list");
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
      onSubmit={updateData}
      validateOnMount
    >
      {({ errors, touched }) => (
        <Form>
          <div className="resume-board-block resume-block-education">
            <ResumeTop goBackRoute={"/resume/education/list"} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">Tell us about your education</h2>
              <p className="resume-block-lead">
                Enter your education experience so far, even if you are a
                current student or did not graduate.
              </p>

              <div className="resume-row">
                <div className="resume-form">
                  <p className="form-hint">*indicates a required field</p>
                  <div className="form-elems-wrap">
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
                <span className="btn-text">Next</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EducationEdit;
