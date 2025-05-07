import * as Yup from "yup";

const ContactInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required("First name is required.")
    .matches(/^[A-Za-z]+$/, "First name must contain only letters")
    .max(200),
  surName: Yup.string().trim().required("Surname is required").max(200),
  profession: Yup.string().trim().max(200),
  cityOrMunicipality: Yup.string()
    .trim()
    .required("City or Municipality is required")
    .max(200),
  country: Yup.string().trim().required("Country is required").max(200),
  phone: Yup.string()
    .trim()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .max(200),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Invalid email address")
    .max(200),
  postalCode: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, "Postal code must contain only numbers")
    .max(200),
  dob: Yup.string().required("Date of Birth is required"),
  nationality: Yup.string().trim().required("Nationality is required").max(200),
  gender: Yup.string().required("Gender is required"),
  height: Yup.string().required("Height is required"),
  weight: Yup.string().required("Weight is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
});

export default ContactInfoValidationSchema;
