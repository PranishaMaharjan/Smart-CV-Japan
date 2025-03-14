import "./Contact.scss";
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
const Contact = () => {
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
      navigate("/resume/education/tips");
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
              <h2 className="resume-block-ttl">
                What&apos;s the best way for employers to contact you?
              </h2>
              <p className="resume-block-lead">
                We suggest including an email and phone number.
              </p>
              <div className="resume-row">
                {/* Profile Image Upload */}
                <div className="resume-img">
                  <div className="resume-img-preview">
                    <img src={imagePreview} alt="Profile Preview" />
                  </div>
                  <button
                    type="button"
                    onClick={handleImageChange}
                    className="img-upload-btn border-effect"
                  >
                    Upload Photo
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    name="image"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileInputChange}
                  />
                </div>

                {/* Form Fields */}
                <div className="resume-form">
                  <p className="form-hint">*indicates a required field</p>
                  <div className="form-elems-wrap">
                    <div className="form-elem-cols-2">
                      <FormField
                        label="First Name*"
                        placeholder="e.g. Maria"
                        name="firstName"
                        errors={errors}
                        touched={touched}
                      />
                      <FormField
                        label="Surname*"
                        placeholder="e.g. Talley"
                        name="surname"
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="form-elem-cols-1">
                      <FormField
                        label="Profession"
                        isOptional={true}
                        placeholder="e.g. Sr. Accountant"
                        name="profession"
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="form-elem-cols-2">
                      <FormField
                        label="City/Municipality*"
                        placeholder="e.g. Bangkok"
                        name="cityOrMunicipality"
                        errors={errors}
                        touched={touched}
                      />
                      <div className="form-elem-subcols-2">
                        <FormField
                          label="Country*"
                          placeholder="e.g. Thailand"
                          name="country"
                          errors={errors}
                          touched={touched}
                        />
                        <FormField
                          label="Postal Code"
                          placeholder="e.g. 6000"
                          name="postalCode"
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                    </div>
                    <div className="form-elem-cols-2">
                      <FormField
                        label="Phone*"
                        placeholder="e.g. +234873249545"
                        name="phone"
                        errors={errors}
                        touched={touched}
                      />
                      <FormField
                        label="Email*"
                        placeholder="e.g. mdelacruz@gmail.com"
                        name="email"
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
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
                <span className="btn-text">Next: Education</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
