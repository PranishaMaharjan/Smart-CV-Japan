// import "./Contact.scss";
import "./SelectCvType.scss";
import { Images } from "../../../assets/images";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  updateContactInfo,
  updateUploadedImage,
} from "../../../redux/slices/resumeSlice";
import { selectContactInfo } from "../../../redux/selectors/resumeSelectors";
import { useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ContactInfoValidationSchema from "../../../forms/ContactInfoValidationSchema";
import FormField from "../../../components/common/FormField";
import routeConstants from "../../../constants/routeConstants";
import axios from "axios";

const SelectCvType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactInfoData = useSelector(selectContactInfo) || {};
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Memoized preview image to prevent re-renders
  const imagePreview = useMemo(() => {
    return selectedFile
      ? URL.createObjectURL(selectedFile)
      : contactInfoData?.uploadImage || Images.SampleImage;
  }, [selectedFile, contactInfoData]);

  // Save contact information
  const saveContactInfo = (values, { setSubmitting }) => {
    try {
      dispatch(updateContactInfo(values));
      navigate("/resume/personaldetails/add");
      // navigate("/resume/education/tips");
      // navigate("/resumepage/personaldetails/add");
      // navigate(routeConstants.RESUME_PERSONAL_DETAILS);
      translateText("Pranisha");
    } catch (error) {
      console.error("Error saving contact info:", error);
    } finally {
      setSubmitting(false);
    }
  };

  async function translateText(text) {
    try {
      const response = await axios.get(
        "https://translate.googleapis.com/translate_a/single",
        {
          params: {
            client: "gtx",
            sl: "auto", // Auto-detect source language
            tl: "ja", // Translate to Japanese
            dt: "t",
            q: text,
          },
        }
      );

      console.log("Translated Text:", response.data[0][0][0]); // Extracting translated text
    } catch (error) {
      console.error("Translation error:", error);
    }
  }

  // Trigger file input
  const handleImageChange = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (!file) return;

    // Validate file type
    const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validImageTypes.includes(file.type)) {
      alert("Please upload a valid image file (JPG, PNG, or WEBP).");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = () => {
      dispatch(updateUploadedImage(reader.result));
    };

    reader.readAsDataURL(file);
  };

  return (
    <Formik
      initialValues={contactInfoData}
      validationSchema={ContactInfoValidationSchema}
      onSubmit={saveContactInfo}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="resume-board-block resume-block-contact">
            <ResumeTop goBackRoute={routeConstants.SELECT} />
            <div className="resume-block-content">
              <div className="resume-block-ttl">
                <h2 className="">Untitled Cv Draft</h2>
                <img src="../../src/assets/icons/pencil-edit-02.png"></img>
              </div>

              <div className="resume-block-container">
                <p className="resume-block-lead">Select CV Type</p>

                <div className="resume-subttl">
                  <p className="resume-subttl-text">
                    <img src="../../src/assets/icons/information-square.png"></img>
                    Select for what purpose you are creating you CV and we will
                    suggest you import fields accordingly.
                  </p>
                </div>

                <div className="resume-type-select">
                  <div className="resume-type-ssw">
                    <p>SSW</p>
                  </div>
                  <div className="resume-type-titp">
                    <p>TITP</p>
                  </div>
                  <div className="resume-type-visas">
                    <p>University Graduate Visas</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="resume-block-bottom">
                {/* <button
                  type="button"
                  className="resume-preview-btn btn btn-back btn-outline border-effect"
                >
                  <span className="btn-text">Back</span>
                </button> */}
                <button
                  type="button"
                  onClick={() => navigate("/resume/personaldetails/add")}
                  className="resume-next-btn btn btn-next border-effect"
                >
                  <span className="btn-text">Next</span>
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SelectCvType;
