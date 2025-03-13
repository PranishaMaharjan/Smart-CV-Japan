import * as Yup from "yup";

const EducationInfoValidationSchema = Yup.object().shape({
  schoolName: Yup.string()
    .required("School name is required.")
    .max(200, "School name must be at most 200 characters."),
  schoolLocation: Yup.string()
    .required("School location is required.")
    .max(200, "School location must be at most 200 characters."),
  degree: Yup.string()
    .required("Degree is required.")
    .max(200, "Degree must be at most 200 characters."),
  fieldOfStudy: Yup.string()
    .required("Field of study is required.")
    .max(200, "Field of study must be at most 200 characters."),
  graduationMonth: Yup.string().required("Graduation month is required."),
  graduationYear: Yup.string().required("Graduation year is required."),
});

export default EducationInfoValidationSchema;
