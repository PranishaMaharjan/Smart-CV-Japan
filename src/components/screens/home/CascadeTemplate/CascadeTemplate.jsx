import { Link } from "react-router-dom";
import { Images } from "../../../../assets/images";
import "./CascadeTemplate.scss";

const CascadeTemplate = () => {
  return (
    <section className="cascade-template">
      <div className="container">
        <div className="cascade-template-wrap">
          {/* <img src={Images.CascadeTemplateImg} className="cascade-template-img" alt="" /> */}
          <div className="cascade-template-content">
            <h3 className="cascade-template-ttl">what people say about us</h3>
          </div>
        </div>

        {/* <div className="">
            <p className="cascade-template-text">
              You can add, remove, and rearrange the sections and further
              customize your resume, picking from dozens of color
              combinations...
            </p>
            <div className="separator-line"></div>
            <p className="cascade-template-text">Template chosen by</p>
            <div className="cascade-template-user">15,000+ users</div>
            <Link to="/resume" className="btn btn-red btn-outline">
              <span className="btn-text">use this resume template</span>
            </Link>
          </div> */}

        <div className="comments">
          <div className="comments-groups">
            <div className="comment-groups-space">
              <p>
                The Japanese is good for auto generate resume saved a lot of
                time. I loved how simple and efficient the platform is. We found
                skilled Nepali candidate for the effortlessly.
              </p>
              <div className="comment-profile">
                <img
                  className=""
                  src="src/assets/images/comment1.png"
                  alt="image"
                ></img>
                <div className="comment-profile-name">
                  <p className="comment-name">Nguyen Shane</p>
                  <p className="comment-position">Student</p>

                  <div className="comment-profile-icon">
                    <img src="src/assets/icons/TwitterIcon.png"></img>
                    <img src="src/assets/icons/FacebookIcon.png"></img>
                    <img src="src/assets/icons/Icon.png"></img>
                    <img src="src/assets/icons/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="comments-groups">
            <div className="comment-groups-space">
              <p>
                We found skilled Nepali candidates the effortlessly. The system
                generated is a resumes were met our requirement. The Japanese is
                good for auto generate the resume saved a lot of time.
              </p>
              <div className="comment-profile">
                <img
                  className=""
                  src="src/assets/images/comment2.png"
                  alt="image"
                ></img>
                <div className="comment-profile-name">
                  <p className="comment-name">Miles Esther</p>
                  <p className="comment-position">Associate Manager</p>

                  <div className="comment-profile-icon">
                    <img src="src/assets/icons/TwitterIcon.png"></img>
                    <img src="src/assets/icons/FacebookIcon.png"></img>
                    <img src="src/assets/icons/Icon.png"></img>
                    <img src="src/assets/icons/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="comments-groups">
            <div className="comment-groups-space">
              <p className="comment-description">
                Helps to shortlisted candidate under SSW and TITP programs. The
                video is most the helpful. The system generate for the need
                resumes saved a lot. Design are so good.
              </p>
              <div className="comment-profile">
                <img
                  className=""
                  src="src/assets/images/comment3.png"
                  alt="image"
                ></img>
                <div className="comment-profile-name">
                  <p className="comment-name">Miles Esther</p>
                  <p className="comment-position">Recruit Agency</p>

                  <div className="comment-profile-icon">
                    <img src="src/assets/icons/TwitterIcon.png"></img>
                    <img src="src/assets/icons/FacebookIcon.png"></img>
                    <img src="../src/assets/icons/Icon.png"></img>
                    <img src="../src/assets/icons/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CascadeTemplate;
