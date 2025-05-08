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

            {/* <div className="preview-intro-img">
              <img src={Images.Avatar} alt="" />
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3 className="preview-intro-name">
                      <span>{resume?.contactInfo?.firstName}</span>
                      <span>{resume?.contactInfo?.surName}</span>
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="preview-intro-prof">
              {resume?.contactInfo?.profession}
            </p>
          </div>
          <div className="preview-block-group">
            <div className="preview-block-item preview-block-contact">
              <div className="preview-block-head">
                <p>Contact</p>
              </div>
              <div className="preview-block-list">
                <div className="preview-list-item">
                  <span className="list-item-lbl">Address</span>
                  <span className="list-item-val">
                    {resume?.contactInfo?.cityOrMunicipality},{" "}
                    {resume?.contactInfo?.country},{" "}
                    {resume?.contactInfo?.postalCode}
                  </span>
                </div>
                <div className="preview-list-item">
                  <span className="list-item-lbl">Phone</span>
                  <span className="list-item-val">
                    {resume?.contactInfo?.phone}
                  </span>
                </div>
                <div className="preview-list-item">
                  <span className="list-item-lbl">E-mail</span>
                  <span className="list-item-val">
                    {resume?.contactInfo?.email}
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div className="preview-block-item preview-block-links">
              <div className="preview-block-head">
                <p>Websites, Portfolios, Profiles</p>
              </div>
              <div className="preview-block-list">
                {resume?.extraInfo?.portfolios?.map((portfolio) => {
                  return (
                    <div key={portfolio.id} className="preview-list-item">
                      <span className="list-item-val">{portfolio.name}</span>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* <div className="preview-block-item preview-block-skill">
              <div className="preview-block-head">
                <p>Skills</p>
              </div>
              <div className="preview-block-list">
                {resume?.skillInfo?.map((skill) => {
                  return (
                    <div className="preview-list-item" key={skill.id}>
                      <span className="list-item-val">{skill.name}</span>
                      <div className="list-item-rate">
                        <span
                          className="list-item-rate-val"
                          style={{
                            width: `${(skill.rating / 5) * 100}%`,
                          }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* <div className="preview-block-item preview-block-contact">
              <div className="preview-block-head">
                <p>Languages</p>
              </div>
              <div className="preview-block-list">
                {resume?.extraInfo?.languages?.map((language) => {
                  return (
                    <div className="preview-list-item" key={language.id}>
                      <span className="list-item-val">{language.name}</span>
                      <div className="list-item-rate">
                        <span
                          className="list-item-rate-val"
                          style={{
                            width: `${(language.rating / 5) * 100}%`,
                          }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
