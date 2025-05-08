import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import "./CvTemplate.scss";
import { selectResume } from "../../../redux/selectors/resumeSelectors";
import Japan from "../../../assets/images/Japan.png";
import routeConstants from "../../../constants/routeConstants";

const CvTemplate = () => {
  const resume = useSelector(selectResume);
  const navigate = useNavigate();
  const previewRef = useRef(null);

  const passportFiles = resume?.passportFiles || [];
  const jftn4Files = resume?.jftn4Files || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded video file:", passportFiles);
    navigate(routeConstants.RESUME_CVTEMPLATE);
  };

  const handleDownload = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-board-block resume-block-preview">
      <div className="dashboard">
        <ResumeTop goBackRoute={routeConstants.RESUME_SELECTCVTYPE} />
      </div>
      <hr/>

      <div className="resume-block-content resume-block-content-preview">
        {/* <h2 className="resume-block-ttl">Review your resume</h2> */}
        <p className="resume-block-lead">Remi Shrestha CV</p>
        <div className="btns-preview">
          <button onClick={handleSubmit} className="btn-translate">
            <span>
              <img src={Japan} className="translate-japan" />
            </span>
          </button>

          <button onClick={handleDownload} className="btn-download">
            Download PDF
          </button>
        </div>
      </div>

      <div className="preview-main" ref={previewRef}>
        <div className="preview-left">
          <div className="preview-intro">
            {/* Contact Info */}
            <table className="contact-table">
              <tbody>
                <tr>
                  <td className="label">ふりがな</td>
                  <td>
                    <span>プラニーシャ</span>&nbsp;
                    <span>マハルジャン</span>
                  </td>
                  <td rowSpan="4" className="photo-cell">
                    {/* Profile photo placeholder */}
                  </td>
                </tr>
                <tr>
                  <td className="label">フルネーム</td>
                  <td className="bold-text">
                    <span>プラニーシャ</span>&nbsp;
                    <span>マハルジャン</span>
                  </td>
                </tr>
                <tr>
                  <td className="label">ふりがな</td>
                  <td>
                    <span className="list-item-val">
                      カトマンズ ネパール
                      {resume?.contactInfo?.postalCode}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="label">Current Location</td>
                  <td>
                    <span className="list-item-val bold-text">
                      カトマンズ ネパール
                      {resume?.contactInfo?.postalCode}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Education */}
            <table className="education-table">
              <tbody>
                <tr className="first-row">
                  <td className="year-label">年</td>
                  <td className="moon-label">月</td>
                  <td className="edu-label">学歴</td>
                </tr>
                {resume?.educationInfo?.map((education, index) => (
                  <tr key={education.id || index}>
                    <td>{education.graduationYear}</td>
                    <td>{education.graduationMonth}</td>
                    <td>{education.schoolName}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Work History */}
            <table className="workhistory-table">
              <tbody>
                <tr className="first-row">
                  <td className="year-label">年</td>
                  <td className="moon-label">月</td>
                  <td className="edu-label">職歴</td>
                </tr>
                {resume?.workhistoryInfo?.map((workHistory, index) => (
                  <tr key={workHistory.id || index}>
                    <td>{workHistory.endDateYear}</td>
                    <td>{workHistory.endDateMonth}</td>
                    <td>{workHistory.jobTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary */}
            <table className="summary-table">
              <tbody>
                <tr className="first-row">
                  <th className="detail-label">特技、自己PR、志望動機</th>
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

            <table className="contact-table">
              <tbody>
                <tr>
                  <td className="label">ふりがな</td>
                  <td>
                    <span>{resume?.contactInfo?.dob}</span>&nbsp;
                    <span>{resume?.contactInfo?.nationality}</span>
                  </td>
                </tr>
                <tr>
                  <td className="label">Full Name</td>
                  <td className="bold-text">
                    <span>{resume?.contactInfo?.gender}</span>&nbsp;
                    <span>{resume?.contactInfo?.height}</span>
                  </td>
                </tr>
                <tr>
                  <td className="label">Furigana</td>
                  <td>
                    <span className="list-item-val">
                      {resume?.contactInfo?.weight},{" "}
                      {resume?.contactInfo?.bloodGroup},{" "}
                      {resume?.contactInfo?.martialStatus}
                      {resume?.contactInfo?.tattoo}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Passport Preview */}
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

            {/* JFT/N4 Preview */}
            <div className="jftnf4-preview">
              {jftn4Files && jftn4Files.length > 0 ? (
                <ul className="file-preview-list">
                  {jftn4Files.map((file, index) => (
                    <li key={index} className="file-preview-item">
                      <div>
                        <strong>{file.name}</strong> –{" "}
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
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

export default CvTemplate;
