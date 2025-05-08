import { Link } from "react-router-dom";
import { Images } from "../../../assets/images";
import { useRef, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import "./PassportUpload.scss";

const PassportUpload = () => {
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

  return (
    <div className="resume-board-block resume-block-skill">
      <ResumeTop goBackRoute={routeConstants.RESUME_PERSONAL_DETAILS} />
      <div className="resume-block-content">
        <div className="resume-block-ttl">
          <h2>Untitled Cv Draft</h2>
          <img
            src="../../src/assets/icons/pencil-edit-02.png"
            alt="edit icon"
          />
        </div>

        <div className="resume-block-container">
          <p className="resume-block-lead">Passport Upload</p>
          <hr />

          <div className="resume-subttl">
            <p className="resume-subttl-text">
              <img
                src="../../src/assets/icons/information-square.png"
                alt="info icon"
              />
              Upload your original passport. Only JPG, PDF or DOC files allowed.
              Max 5MB per file, 10 files max.
            </p>
          </div>

          <div className="resume-certifiation-ttl">
            <p className="resume-certifiation-ttl-text">Passport</p>
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
  );
};
export default PassportUpload;
