import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Preview.scss";
import { selectResume } from "../../../redux/selectors/resumeSelectors";
import { Images } from "../../../assets/images";
import flagJapan from "../../../assets/images/flagJapan.png";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import routeConstants from "../../../constants/routeConstants";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const resume = useSelector(selectResume);
  const passportFiles = resume?.passportFiles || [];
  const jftn4Files = useSelector(
    (state) => state.resume.extraInfo.jftn4Files || []
  );
  console.log(resume);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded video file:", passportFiles);
    navigate(routeConstants.RESUME_CVTEMPLATE);

    // Handle video upload to backend here using FormData if needed
  };
  return (
    <div className="resume-board-block resume-block-preview">
      <div className="resume-block-content">
        <button onClick={handleSubmit} className="btn btn-orange">
          Submit
        </button>
        <h2 className="resume-block-ttl">Review your resume</h2>
        <p className="resume-block-lead">
          Review and make any final changes to your resume. Then download or
          email yourself a copy and apply for jobs!
        </p>
        <div className="translator-div">
          <Link to="/resume/japan">
            <img className="translator" src={flagJapan} alt="Japan Flag" />
          </Link>
        </div>
      </div>

      <div className="preview-main">
        <div className="preview-left">
          <div className="preview-intro">
            <table className="contact-table">
              <tbody>
                <tr>
                  <td className="label">Furigana</td>
                  <td>
                    <span>{resume?.contactInfo?.firstName}</span>&nbsp;
                    <span>{resume?.contactInfo?.surName}</span>
                  </td>
                  <td rowSpan="4" className="photo-cell">
                    {/* <img src={uploadImage} alt="Profile" className="photo" /> */}
                  </td>
                </tr>
                <tr>
                  <td className="label">Full Name</td>
                  <td className="bold-text">
                    <span>{resume?.contactInfo?.firstName}</span>&nbsp;
                    <span>{resume?.contactInfo?.surName}</span>
                  </td>
                </tr>
                {/* <tr>
                  <td className="label">Date of Birth</td>
                  <td className="dob-info">
                    <span>{dobYear}</span> / <span>{dobMonth}</span> /{" "}
                    <span>{dobDay}</span> ( {age} years old ) &nbsp;&nbsp;
                    <span className="gender-label">Gender:</span> {gender}
                  </td>
                </tr> */}
                <tr>
                  <td className="label">Furigana</td>
                  <td>
                    <span className="list-item-val">
                      {resume?.contactInfo?.cityOrMunicipality},{" "}
                      {resume?.contactInfo?.country},{" "}
                      {resume?.contactInfo?.postalCode}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="label">Current Location</td>
                  <td>
                    <span className="list-item-val bold-text">
                      {resume?.contactInfo?.cityOrMunicipality},{" "}
                      {resume?.contactInfo?.country},{" "}
                      {resume?.contactInfo?.postalCode}
                    </span>
                  </td>
                  {/* <td></td> */}
                </tr>
              </tbody>
            </table>

            <table className="education-table">
              <tbody>
                <tr className="first-row">
                  <td className="year-label">Year</td>
                  <td className="moon-label">moon</td>
                  <td className="edu-label">Educational Background</td>
                  {/* <td>
                        <span>{education.degree}</span>
                      </td> */}
                </tr>
                {resume?.educationInfo?.map((education, index) => (
                  <React.Fragment key={education.id || index}>
                    <tr>
                      <td>
                        <span>{education.graduationYear}</span>
                      </td>
                      <td>
                        <span>{education.graduationMonth}</span>
                      </td>
                      <td>
                        <span>{education.schoolName}</span>
                      </td>
                    </tr>
                    <tr></tr>
                    {/* <tr>
                      <td className="label">Location</td>
                      <td>
                        <span>{education.location}</span>
                      </td>
                    </tr> */}
                  </React.Fragment>
                ))}
              </tbody>
            </table>

            <table className="workhistory-table">
              <tbody>
                <tr className="first-row">
                  <td className="year-label">Year</td>
                  <td className="moon-label">moon</td>
                  <td className="edu-label">Work history</td>
                  {/* <td>
                        <span>{education.degree}</span>
                      </td> */}
                </tr>
                {resume?.workhistoryInfo?.map((workHistory, index) => (
                  <React.Fragment key={workHistory.id || index}>
                    <tr>
                      <td>
                        <span>{workHistory.endDateYear}</span>
                      </td>
                      <td>
                        <span>{workHistory.endDateMonth}</span>
                      </td>
                      <td>
                        <span>{workHistory.jobTitle}</span>
                      </td>
                    </tr>
                    <tr></tr>
                    {/* <tr>
                      <td className="label">Location</td>
                      <td>
                        <span>{education.location}</span>
                      </td>
                    </tr> */}
                  </React.Fragment>
                ))}
              </tbody>
            </table>

            <table className="summary-table">
              <tbody>
                <tr className="first-row">
                  <th className="detail-label">
                    Special skills, Self-promotion, Motivation for applying
                  </th>
                </tr>
                <tr>
                  <td>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: resume?.summaryInfo?.reason,
                      }}
                    />

                    <span
                      dangerouslySetInnerHTML={{
                        __html: resume?.summaryInfo?.selfPromotion,
                      }}
                    />

                    <span
                      dangerouslySetInnerHTML={{
                        __html: resume?.summaryInfo?.requests,
                      }}
                    />

                    <span
                      dangerouslySetInnerHTML={{
                        __html: resume?.summaryInfo?.vision,
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="passport-preview">
              {passportFiles.map((file, index) => {
                const url = URL.createObjectURL(file);

                if (file.type.includes("image")) {
                  return (
                    <img
                      key={index}
                      src={url}
                      alt={`Passport ${index}`}
                      width={150}
                    />
                  );
                } else if (file.type === "application/pdf") {
                  return (
                    <embed
                      key={index}
                      src={url}
                      type="application/pdf"
                      width="100%"
                      height="400px"
                    />
                  );
                } else {
                  return <p key={index}>{file.name}</p>;
                }
              })}
            </div>

            <div className="jftnf4-preview">
              {jftn4Files && jftn4Files.length > 0 ? (
                <ul className="file-preview-list">
                  {jftn4Files.map((file, index) => (
                    <li key={index} className="file-preview-item">
                      <div>
                        <strong>{file.name}</strong> –{" "}
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>

                      {/* Display preview if image or PDF */}
                      {file.type.startsWith("image/") && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="file-preview-image"
                        />
                      )}

                      {file.type === "application/pdf" && (
                        <iframe
                          src={URL.createObjectURL(file)}
                          title={`preview-${index}`}
                          className="file-preview-pdf"
                        ></iframe>
                      )}

                      <a
                        href={URL.createObjectURL(file)}
                        download={file.name}
                        className="file-download-link"
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No JFT/N4 certificates uploaded.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
