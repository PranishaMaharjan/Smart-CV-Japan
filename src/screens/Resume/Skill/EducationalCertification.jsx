import { v4 as uuidv4 } from "uuid";
import {
  FaMinusCircle,
  FaPlus,
  FaRegStar,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";
import { Images } from "../../../assets/images";
import { useRef, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import "./PassportUpload.scss";

const EducationalCertification = () => {
  const [passportFiles, setPassportFiles] = useState([]);

  const maxFiles = 10;
  const maxSize = 5 * 1024 * 1024; // 5MB

  const onDrop = (acceptedFiles, fileRejections) => {
    const newFiles = [...passportFiles, ...acceptedFiles].slice(0, maxFiles);
    setPassportFiles(newFiles);

    if (fileRejections.length > 0) {
      fileRejections.forEach(({ file, errors }) => {
        errors.forEach((e) => {
          alert(`File "${file.name}" rejected: ${e.message}`);
        });
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize,
    maxFiles,
    multiple: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Passport files:", passportFiles);
    // You can send files to backend here using FormData
  };

  // useResumeCompletionGuard();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const skills = useSelector(selectSkillInfo);
  // const [skillError, setSkillError] = useState(null);

  // const initialValues = {
  //   skills: skills.length ? skills : [{ id: uuidv4(), name: "", rating: 0 }],
  // };

  // const addSkillItem = (arrayHelpers, values) => {
  //   const id = uuidv4();
  //   const isEmptySkill = values.skills.some((skill) => !skill.name.trim());
  //   if (isEmptySkill) {
  //     setSkillError("Please fill existing field before adding another.");
  //   } else {
  //     setSkillError(null);
  //     arrayHelpers.push({
  //       id: id,
  //       name: "",
  //       rating: 0,
  //     });
  //   }
  // };

  // const addOrUpdateData = (values) => {
  //   dispatch(addOrUpdateSkillInfo(values.skills));
  //   navigate(routeConstants.RESUME_SUMMARY_TIPS);
  // };

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setSkillError(null);
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, [skillError]);

  return (
    <div className="resume-board-block resume-block-skill">
      <div className="resume-block-content">
        <div className="resume-block-container">
          <p className="resume-block-lead">
            Educational Qualification Certification
          </p>
          <hr />

          <div className="resume-subttl">
            <p className="resume-subttl-text">
              <img
                src="../../src/assets/icons/information-square.png"
                alt="info icon"
              />
              Upload your original Educational qualification certificates.
              Incomplete or incorrect info may cause delays. You can upload
              multiple certificate copies.
            </p>
          </div>

          <div className="resume-certifiation-ttl">
            <p className="resume-certifiation-ttl-text">
              Educational Qualification & Certification
            </p>
          </div>

          <div {...getRootProps({ className: "dropzone" })}>
            <div className="dropzone-img">
              <img src="../../src/assets/icons/cloud-upload.png"></img>
            </div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>Choose File or Drag here</p>
            )}
            <p>Supported file type(s): PDF, DOC, JPG</p>
            <p>Size limit: 5MB per file, can upload up to 10 files</p>
          </div>

          {passportFiles.length > 0 && (
            <ul className="file-list">
              {passportFiles.map((file, idx) => (
                <li key={idx}>
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
          )}

          {/* <button onClick={handleSubmit} className="btn btn-orange">
            Submit
          </button> */}
        </div>
      </div>
    </div>
    // <Formik initialValues={initialValues} onSubmit={addOrUpdateData}>
    //   {({ values }) => (
    //     <Form>
    //       <div className="resume-board-block resume-block-skill">
    //         <div className="resume-block-content">
    //           <h2 className="resume-block-ttl">
    //             What skills would you like to highlight?
    //           </h2>
    //           <p className="resume-block-lead">
    //             Write your skills with rating along with it.
    //           </p>
    //           <FieldArray name="skills">
    //             {(arrayHelpers) => (
    //               <>
    //                 <div className="resume-row">
    //                   <div className="form-elems-wrap">
    //                     {values.skills.map((skill, index) => (
    //                       <div className="form-elem" key={index}>
    //                         <div className="form-rating">
    //                           <button
    //                             type="button"
    //                             onClick={() =>
    //                               arrayHelpers.replace(index, {
    //                                 ...skill,
    //                                 rating: 0,
    //                               })
    //                             }
    //                             className="skill-rating-btn"
    //                           >
    //                             <FaMinusCircle size={20} />
    //                           </button>
    //                           <div className="rating-stars">
    //                             {Array.from({ length: 5 }).map((_, i) => (
    //                               <button
    //                                 type="button"
    //                                 key={i}
    //                                 className="star-btn"
    //                                 onClick={() =>
    //                                   arrayHelpers.replace(index, {
    //                                     ...skill,
    //                                     rating: i + 1,
    //                                   })
    //                                 }
    //                               >
    //                                 {i + 1 <= skill.rating ? (
    //                                   <FaStar size={20} />
    //                                 ) : (
    //                                   <FaRegStar size={20} />
    //                                 )}
    //                               </button>
    //                             ))}
    //                           </div>
    //                         </div>
    //                         <div className="form-ctrl-wrap">
    //                           <Field
    //                             type="text"
    //                             name={`skills.${index}.name`}
    //                             className="form-ctrl"
    //                             placeholder="Skill Name"
    //                           />
    //                         </div>
    //                         <button
    //                           type="button"
    //                           onClick={() => arrayHelpers.remove(index)}
    //                           className="skill-delete-btn"
    //                         >
    //                           <FaTrash size={20} />
    //                         </button>
    //                       </div>
    //                     ))}
    //                     {skillError && (
    //                       <div className="error-message">{skillError}</div>
    //                     )}
    //                   </div>
    //                 </div>

    //                 <div className="summary-add">
    //                   <button
    //                     type="button"
    //                     className="summary-add-btn"
    //                     onClick={() => addSkillItem(arrayHelpers, values)}
    //                   >
    //                     <span className="btn-icon">
    //                       <FaPlus />
    //                     </span>
    //                     <span className="btn-text">Add Skill</span>
    //                   </button>
    //                 </div>
    //               </>
    //             )}
    //           </FieldArray>
    //         </div>
    //       </div>
    //     </Form>
    //   )}
    // </Formik>
  );
};

export default EducationalCertification;
