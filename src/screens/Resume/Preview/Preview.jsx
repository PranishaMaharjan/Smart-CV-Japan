import { useSelector } from "react-redux";
import "./Preview.scss";
import { selectResume } from "../../../redux/selectors/resumeSelectors";
import { Images } from "../../../assets/images";

const Preview = () => {
  const resume = useSelector(selectResume);
  console.log(resume);
  return (
    <div className="resume-board-block resume-block-preview">
      <div className="resume-block-content">
        <h2 className="resume-block-ttl">Review your resume</h2>
        <p className="resume-block-lead">
          Review and make any final changes to your resume. Then download or
          email yourself a copy and apply for jobs!
        </p>
      </div>

      <div className="preview-main">
        <div className="preview-left">
          <div className="preview-intro">
            <div className="preview-intro-img">
              <img src={Images.Avatar} alt="" />
            </div>
            <h3 className="preview-intro-name">
              <span>{resume?.contactInfo?.firstName}</span>
              <span>{resume?.contactInfo?.surName}</span>
            </h3>
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
            </div>

            <div className="preview-block-item preview-block-links">
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
            </div>

            <div className="preview-block-item preview-block-skill">
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
            </div>

            <div className="preview-block-item preview-block-contact">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
