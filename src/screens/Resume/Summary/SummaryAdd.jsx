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

const SummaryAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const summaryInfo = useSelector(selectSummaryInfo);
  const [initialSummary, setInitialSummary] = useState(summaryInfo);

  const addData = (values) => {
    dispatch(addOrUpdateSummaryInfo(values.summary));
    navigate(routeConstants.RESUME_EXTRA_ADD);
  };

  useEffect(() => {
    setInitialSummary(summaryInfo);
  }, [summaryInfo]);

  return (
    <Formik
      initialValues={{
        summary: initialSummary,
      }}
      onSubmit={addData}
    >
      {() => (
        <Form>
          <div className="resume-board-block resume-block-summary">
            <ResumeTop goBackRoute={routeConstants.RESUME_SUMMARY_TIPS} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">
                Briefly tell us about your background
              </h2>
              <p className="resume-block-lead">
                Write about your background experience and other things.
              </p>
              <div className="resume-row">
                <div className="resume-form">
                  <div className="form-elem">
                    <label htmlFor="summary" className="form-lbl">
                      Professional Summary:
                    </label>
                    <Field name="summary">
                      {({ field, form }) => (
                        <Editor
                          apiKey="cy2mjyo4kv0z7pjxev0nins8thrrzgym8wuz73k9a23iy71k"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={initialSummary}
                          init={{
                            height: 500,
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
                <span className="btn-text">Next: Extra Sections</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SummaryAdd;
