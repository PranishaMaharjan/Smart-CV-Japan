import * as Yup from "yup";

const WorkHistoryValidationSchema = Yup.object().shape({
  jobTitle: Yup.string()
    .required("Job title is required.")
    .max(200, "Job title must be at most 200 characters."),
  employer: Yup.string()
    .required("Employer is required.")
    .max(200, "Employer must be at most 200 characters."),
  location: Yup.string()
    .required("Location is required.")
    .max(200, "Location must be at most 200 characters."),
  startDateMonth: Yup.string().required("Work start month is required."),
  startDateYear: Yup.string().required("Work start year is required."),
  isCurrentlyWorking: Yup.boolean(),
  endDateMonth: Yup.string().required("Work end month is required."),
  endDateYear: Yup.string().required("Work end year is required."),
});

export default WorkHistoryValidationSchema;
