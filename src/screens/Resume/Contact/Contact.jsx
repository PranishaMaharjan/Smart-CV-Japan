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
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactInfoValidationSchema from "../../../forms/ContactInfoValidationSchema";
import FormField from "../../../components/common/FormField";
import routeConstants from "../../../constants/routeConstants";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactInfoData = useSelector(selectContactInfo);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const saveContactInfo = (values, { setSubmitting }) => {
    try {
      const contactInfoData = values;
      dispatch(updateContactInfo(contactInfoData));
      navigate("/resume/education/tips");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageChange = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const selectedImage = event.target.files[0];
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;
      dispatch(updateUploadedImage(imageData));
    };

    reader.readAsDataURL(selectedImage);
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
                <div className="resume-img">
                  <div className="resume-img-preview">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Uploaded" />
                    ) : contactInfoData?.uploadImage ? (
                      <img src={contactInfoData.uploadImage} alt="Uploaded" />
                    ) : (
                      <img src={Images.SampleImage} alt="Default" />
                    )}
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
                    onChange={handleFileInputChange}
                  />
                </div>
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
                        name="surName"
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
                        placeholder="e.g. Talley"
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
                <div className="resume-preview"></div>
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
