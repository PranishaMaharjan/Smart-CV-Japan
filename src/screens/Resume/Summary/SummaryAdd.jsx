import { useEffect, useRef, useState } from "react";
import "./Summary.scss";
import { Editor } from "@tinymce/tinymce-react";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectSummaryInfo } from "../../../redux/selectors/resumeSelectors";
import { addOrUpdateSummaryInfo } from "../../../redux/slices/resumeSlice";
import { useNavigate } from "react-router-dom";
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
import { Link } from "react-router-dom";
import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const SummaryItem = ({ initialSummary, addData, formikRef }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const editorRef = useRef(null);

  return (
    <Formik
      initialValues={{
        reason: initialSummary.reason || "",
        selfPromotion: initialSummary.selfPromotion || "",
        requests: initialSummary.requests || "",
        vision: initialSummary.vision || "",
      }}
      onSubmit={addData}
      innerRef={formikRef}
    >
      {() => (
        <Form>
          <div className="resume-board-block resume-block-summary">
            <div className="resume-block-content">
              <h2 className="resume-block-ttl"></h2>
              <p className="resume-block-lead">Other Key Informations</p>
              <hr/>
              <div className="resume-row">
                <div className="resume-form">
                  <div className="form-elem">
                    <label htmlFor="summary" className="form-lbl">
                      Reason for the Application / 志望動機
                    </label>
                    <Field name="reason">
                      {({ field, form }) => (
                        <Editor
                          apiKey="cy2mjyo4kv0z7pjxev0nins8thrrzgym8wuz73k9a23iy71k"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={initialSummary.reason}
                          init={{
                            height: 120,
                            menubar: false,
                            toolbar:
                              "undo redo | formatselect | " +
                              "bold italic backcolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                          }}
                          onEditorChange={(content) => {
                            form.setFieldValue(field.name, content);
                          }}
                        />
                      )}
                    </Field>
                  </div>

                  <div className="form-elem">
                    <label htmlFor="summary" className="form-lbl">
                      Self-promotion / 自己PR
                    </label>
                    <Field name="selfPromotion">
                      {({ field, form }) => (
                        <Editor
                          apiKey="cy2mjyo4kv0z7pjxev0nins8thrrzgym8wuz73k9a23iy71k"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={initialSummary.selfPromotion}
                          init={{
                            height: 120,
                            menubar: false,
                            toolbar:
                              "undo redo | formatselect | " +
                              "bold italic backcolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                          }}
                          onEditorChange={(content) => {
                            form.setFieldValue(field.name, content);
                          }}
                        />
                      )}
                    </Field>
                  </div>

                  <div className="form-elem">
                    <label htmlFor="summary" className="form-lbl">
                      Fill in freely on requests regarding salary, office hours,
                      place of work, etc. / 本人希望記入欄
                    </label>
                    <Field name="requests">
                      {({ field, form }) => (
                        <Editor
                          apiKey="cy2mjyo4kv0z7pjxev0nins8thrrzgym8wuz73k9a23iy71k"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={initialSummary.requests}
                          init={{
                            height: 120,
                            menubar: false,
                            toolbar:
                              "undo redo | formatselect | " +
                              "bold italic backcolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                          }}
                          onEditorChange={(content) => {
                            form.setFieldValue(field.name, content);
                          }}
                        />
                      )}
                    </Field>
                  </div>

                  <div className="form-elem">
                    <label htmlFor="summary" className="form-lbl">
                      Vision for the future
                    </label>
                    <Field name="vision">
                      {({ field, form }) => (
                        <Editor
                          apiKey="cy2mjyo4kv0z7pjxev0nins8thrrzgym8wuz73k9a23iy71k"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={initialSummary.vision}
                          init={{
                            height: 120,
                            menubar: false,
                            toolbar:
                              "undo redo | formatselect | " +
                              "bold italic backcolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                          }}
                          onEditorChange={(content) => {
                            form.setFieldValue(field.name, content);
                          }}
                        />
                      )}
                    </Field>
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

const SummaryAdd = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const summaryInfo = useSelector(selectSummaryInfo);
  const [initialSummary, setInitialSummary] = useState(summaryInfo);
  const formikRef = useRef();
  const addData = (values) => {
    dispatch(addOrUpdateSummaryInfo(values));
    // navigate(routeConstants.RESUME_EXTRA_ADD);
  };

  useEffect(() => {
    setInitialSummary(summaryInfo);
  }, [summaryInfo]);

  const workHistoryInfoData = useSelector(selectWorkHistoryInfo);
  const contactInfo = useSelector(selectContactInfo);
  const educationInfo = useSelector(selectEducationInfo);
  const { loading, error, success } = useSelector((state) => state.resume);
  const isSubmitting =
    loading.contactInfo || loading.educationInfo || loading.workHistoryInfo;

  const handleSubmitAndNext = async (e) => {
    e.preventDefault();

    if (formikRef.current) {
      await formikRef.current.submitForm(); // <-- submit summary first
    }

    // Log to verify the structure of contactInfo
    // console.log("Submitting contact info:", contactInfo);

    // if (contactInfo !== null) {
    navigate("/resume/certifications/add");
    try {
      await dispatch(submitContactInfo(contactInfo)).unwrap();
      await dispatch(submitEducationInfo(educationInfo)).unwrap();
      // navigate("/resume/certifications/add");
      await dispatch(submitWorkHistoryInfo(workHistoryInfoData)).unwrap();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    // } else {
    //   console.error("Invalid contact info:", contactInfo);
    // }
  };

  // const handleDelete = (id) => {
  //   dispatch(removeWorkHistoryInfo(id));
  // };
  return (
    <div className="resume-board-block resume-block-workhistory">
      <SummaryItem
        initialSummary={initialSummary}
        addData={addData}
        formikRef={formikRef}
      />

      <div className="resume-block-bottom">
        <Link
          to="/resume/selectcvtype/add"
          className="resume-preview-btn btn btn-back btn-outline border-effect"
        >
          <span className="btn-text">Back</span>
        </Link>
        <button
          // disabled={isSubmitting}
          onClick={handleSubmitAndNext}
          className="resume-next-btn btn btn-next border-effect"
        >
          <span className="btn-text">
            {isSubmitting ? "Submitting..." : "Next"}
          </span>
        </button>
        {/* {error && <p>{error}</p>} */}
        {success && <p>Success!</p>}
      </div>
    </div>
  );
};

export default SummaryAdd;
