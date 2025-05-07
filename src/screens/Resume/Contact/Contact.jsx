import "./Contact.scss";
import { Images } from "../../../assets/images";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  updateContactInfo,
  updateUploadedImage,
} from "../../../redux/slices/resumeSlice";
import { selectContactInfo } from "../../../redux/selectors/resumeSelectors";
import { useRef, useState, useEffect, useMemo } from "react";
import ContactInfoValidationSchema from "../../../forms/ContactInfoValidationSchema";
import FormField from "../../../components/common/FormField";
import routeConstants from "../../../constants/routeConstants";

const Contact = () => {
  const dispatch = useDispatch();
  const contactInfoData = useSelector(selectContactInfo) || {};
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formValues, setFormValues] = useState(contactInfoData);

  // Auto-save to Redux on change
  useEffect(() => {
    dispatch(updateContactInfo(formValues));
  }, [formValues]);

  const imagePreview = useMemo(() => {
    return selectedFile
      ? URL.createObjectURL(selectedFile)
      : contactInfoData?.uploadImage || Images.SampleImage;
  }, [selectedFile, contactInfoData]);

  const handleImageChange = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;

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
      initialValues={{ contactInfoData, tattoo: "yes" }}
      validationSchema={ContactInfoValidationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched }) => {
        useEffect(() => {
          setFormValues(values);
        }, [values]);

        return (
          <Form>
            <div className="resume-board-block resume-block-contact">
              <ResumeTop goBackRoute={routeConstants.RESUME_SELECTCVTYPE} />
              <div className="resume-block-content">
                <div className="resume-block-ttl">
                  <h2 className="">Untitled Cv Draft</h2>
                  <img src="../../src/assets/icons/pencil-edit-02.png" />
                </div>
                <div className="resume-block-container">
                  <p className="resume-block-lead">Personal Details</p>
                  <hr />
                  <div className="resume-subttl">
                    <p className="resume-subttl-text">
                      <img src="../../src/assets/icons/information-square.png" />
                      Enter details as per your Passport. All the fields are
                      mandatory except with tag (Optional). Incomplete or
                      incorrect info may cause delays.
                    </p>
                  </div>
                  <div className="resume-row">
                    <div className="resume-img">
                      <button
                        type="button"
                        onClick={handleImageChange}
                        className="img-upload-btn"
                      >
                        <div className="resume-img-preview">
                          <img src={imagePreview} alt="Profile Preview" />
                          <input
                            type="file"
                            ref={fileInputRef}
                            name="image"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleFileInputChange}
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={handleImageChange}
                        className="img-upload-btn"
                      >
                        <img
                          className="upload-img-icon"
                          src="../../src/assets/icons/image-add-02.png"
                        />
                        <p>Upload Image</p>
                      </button>
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
                            isOptional
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
                        {/* New */}
                        <div className="form-elem-cols-3">
                          <FormField
                            label="Date of Birth"
                            placeholder="08/09/2002"
                            name="dob"
                            errors={errors}
                            touched={touched}
                          >
                            <Field type="date" name="dob" />
                          </FormField>
                          <FormField
                            label="Nationality"
                            placeholder="Nepalese"
                            name="nationality"
                            errors={errors}
                            touched={touched}
                          />
                          <FormField
                            label="Gender"
                            placeholder="Male"
                            name="gender"
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                        <div className="form-elem-cols-3">
                          <FormField
                            label="Height (cm)"
                            placeholder="5'7"
                            name="height"
                            errors={errors}
                            touched={touched}
                          />
                          <FormField
                            label="Weight (kg)"
                            placeholder="60"
                            name="weight"
                            errors={errors}
                            touched={touched}
                          />
                          <FormField
                            label="Blood Group"
                            placeholder="O-"
                            name="bloodGroup"
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                        <div className="form-elem-cols-2">
                          <FormField
                            label="Are You Married?"
                            placeholder="Unmarried"
                            name="martialStatus"
                            errors={errors}
                            touched={touched}
                          />
                          <FormField
                            label="Do you have any Tattoo?"
                            name="tattoo"
                            errors={errors}
                            touched={touched}
                          >
                            <div>
                              <label className="flex items-center gap-1">
                                <Field type="radio" name="tattoo" value="yes" />
                                Yes
                              </label>
                              <label className="flex items-center gap-1">
                                <Field type="radio" name="tattoo" value="no" />
                                No
                              </label>
                            </div>
                          </FormField>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Contact;
