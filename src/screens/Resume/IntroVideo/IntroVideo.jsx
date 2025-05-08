import { useState } from "react";
import { useDropzone } from "react-dropzone";
import routeConstants from "../../../constants/routeConstants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";

import "./IntroVideo.scss";

const IntroVideo = () => {
  const navigate = useNavigate();

  const [passportFiles, setPassportFiles] = useState([]);

  const maxFiles = 1;
  const maxSize = 500 * 1024 * 1024; // 500MB

  const onDrop = (acceptedFiles, fileRejections) => {
    const newFiles = [...acceptedFiles].slice(0, maxFiles);
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
      "video/mp4": [],
      "video/quicktime": [], // for .mov
    },
    maxSize,
    maxFiles,
    multiple: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded video file:", passportFiles);
    navigate(routeConstants.RESUME_PREVIEW);

    // Handle video upload to backend here using FormData if needed
  };

  return (
    <div className="resume-board-block resume-block-skill">
      <div className="dashboard">
        <ResumeTop goBackRoute={routeConstants.RESUME_SELECTCVTYPE} />
      </div>
      <hr />
      <div className="resume-block-content">
        <div className="resume-block-ttl">
          <h2 className="">Untitled Cv Draft</h2>
          <img src="../../src/assets/icons/pencil-edit-02.png" />
        </div>
        <div className="resume-block-container">
          <p className="resume-block-lead">JFT/N4 Pass certificate</p>
          <hr />

          <div className="resume-subttl">
            <p className="resume-subttl-text">
              <img
                src="../../src/assets/icons/information-square.png"
                alt="info icon"
              />
              Upload a video of your original JFT/N4 Pass certificate. Only one
              video file is allowed.
            </p>
          </div>

          <div className="resume-certifiation-ttl">
            <p className="resume-certifiation-ttl-text">
              JFT/N4 Pass certificate (Video)
            </p>
          </div>

          <div {...getRootProps({ className: "dropzone" })}>
            <div className="dropzone-img">
              <img
                src="../../src/assets/icons/cloud-upload.png"
                alt="upload icon"
              />
            </div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop video file here...</p>
            ) : (
              <p>Choose Video File or Drag here</p>
            )}
            <p>Supported file type(s): MP4, MOV</p>
            <p>Size limit: 500MB per file, only 1 file allowed</p>
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
        </div>
        <div className="btn-save">
          <button onClick={handleSubmit} className="btn-savecv">
            Save CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
