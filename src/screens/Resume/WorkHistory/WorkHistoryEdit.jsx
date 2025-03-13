import { useDispatch, useSelector } from "react-redux";
import "./WorkHistory.scss";
import { useNavigate, useParams } from "react-router-dom";
import useYearRange from "../../../hooks/useYearRange";
import { Field, Form, Formik } from "formik";
import WorkHistoryValidationSchema from "../../../forms/WorkHistoryValidationSchema";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import FormField from "../../../components/common/FormField";
import { FaCaretDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { updateWorkHistoryInfo } from "../../../redux/slices/resumeSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { selectWorkHistoryInfoById } from "../../../redux/selectors/resumeSelectors";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const WorkHistoryEdit = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startOffset = 20;
  const endOffset = 0;
  const years = useYearRange(startOffset, endOffset);
  const { id } = useParams();
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const workHistory = useSelector((state) =>
    selectWorkHistoryInfoById(state, id)
  );
  const [description, setDescription] = useState(workHistory.description);

  const initialState = {
    jobTitle: workHistory.jobTitle || "",
    employer: workHistory.employer || "",
    location: workHistory.location || "",
    startDateMonth: workHistory.startDateMonth || "",
    startDateYear: workHistory.startDateYear || "",
    endDateMonth: workHistory.endDateMonth || "",
    endDateYear: workHistory.endDateYear || "",
  };

  const updateData = (values, { setSubmitting }) => {
    try {
      const workHistoryInfoData = {
        isCurrentlyWorking,
        description,
        ...values,
      };
      dispatch(updateWorkHistoryInfo({ id, data: workHistoryInfoData }));
      navigate("/resume/workhistory/list");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCheckboxChange = (setFieldValue) => {
    setIsCurrentlyWorking(!isCurrentlyWorking);

    if (!isCurrentlyWorking) {
      const currentDate = new Date();
      const currentMonth = currentDate.toLocaleString("en", { month: "long" });
      const currentYear = currentDate.getFullYear();
      setFieldValue("endDateMonth", currentMonth);
      setFieldValue("endDateYear", currentYear.toString());
    } else {
      setFieldValue("endDateMonth", "");
      setFieldValue("endDateYear", "");
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={WorkHistoryValidationSchema}
      onSubmit={updateData}
      validate={(values) => {
        const errors = {};
        const startDate = new Date(
          `${values.startDateYear}-${values.startDateMonth}`
        );
        const endDate = new Date(
          `${values.endDateYear}-${values.endDateMonth}`
        );

        if (endDate <= startDate) {
          errors.endDateYear = "End date must be after start date";
          errors.endDateMonth = "End date must be after start date";
        }
        return errors;
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div className="resume-board-block resume-block-workhistory">
            <ResumeTop goBackRoute={routeConstants.RESUME_WORKHISTORY_TIPS} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">Review or edit this job</h2>
              <p className="resume-block-lead">
                Start with your most recent job and work backward.
              </p>

              <div className="resume-row">
                <div className="resume-form">
                  <p className="form-hint">*indicates a required field</p>
                  <div className="form-elems-wrap">
                    <div className="form-elem-cols-2">
                      <FormField
                        label="Job Title *"
                        placeholder="e.g. Retail Sales Associate "
                        name="jobTitle"
                        errors={errors}
                        touched={touched}
                      />
                      <FormField
                        label="Employer *"
                        placeholder="e.g. H&M "
                        name="employer"
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="form-elem-cols-2">
                      <FormField
                        label="Location"
                        placeholder="e.g. Cebu City, Cebu, Philippines"
                        name="location"
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Start Date
                        </label>
                        <div className="form-ctrl-cols-2">
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="startDateMonth"
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
                            {errors.startDateMonth &&
                              touched.startDateMonth && (
                                <p className="error-text">
                                  {errors.startDateMonth}
                                </p>
                              )}
                          </div>
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="startDateYear"
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
                            {errors.startDateYear && touched.startDateYear && (
                              <p className="error-text">
                                {errors.startDateYear}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          End Date
                        </label>
                        <div className="form-ctrl-cols-2">
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="endDateMonth"
                              className="form-ctrl"
                              disabled={isCurrentlyWorking ? true : false}
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
                            {errors.endDateMonth && touched.endDateMonth && (
                              <p className="error-text">
                                {errors.endDateMonth}
                              </p>
                            )}
                          </div>
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="endDateYear"
                              className="form-ctrl"
                              disabled={isCurrentlyWorking ? true : false}
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
                            {errors.endDateYear && touched.endDateYear && (
                              <p className="error-text">{errors.endDateYear}</p>
                            )}
                          </div>
                        </div>
                        <div className="form-check">
                          <div className="form-check-wrap">
                            <input
                              type="checkbox"
                              className="form-check-ctrl"
                              name="isCurrentlyWorking"
                              checked={isCurrentlyWorking}
                              onChange={() =>
                                handleCheckboxChange(setFieldValue)
                              }
                            />
                            <div className="form-check-icon">
                              <FaCheck />
                            </div>
                          </div>
                          <label className="form-check-lbl">
                            I currently work here
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-elem-cols-1">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Job Description:
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={description}
                          name="description"
                          onChange={setDescription}
                        />
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

export default WorkHistoryEdit;
