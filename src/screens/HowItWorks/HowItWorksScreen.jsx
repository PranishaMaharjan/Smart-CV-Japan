import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import "./HowItWorksScreen.scss";

const HowItWorksScreen = () => {
  return (
    <div className="pg-hiw">
      <section className="hiw-block">
        <div className="container">
          <div className="hiw-wrap">
            <div className="hiw-left">
              <h3 className="hiw-ttl">Just three <br/> simple steps</h3>
              <div className="hiw-steps">
                <div className="hiw-steps-item">
                  <div className="hiw-steps-count">1</div>
                  <p className="hiw-steps-text">
                    Select a template from our library of professional designs
                  </p>
                </div>
                <div className="hiw-steps-item">
                  <div className="hiw-steps-count">2</div>
                  <p className="hiw-steps-text">
                    Build your resume with our industry-specific bullet points
                  </p>
                </div>
                <div className="hiw-steps-item">
                  <div className="hiw-steps-count">3</div>
                  <p className="hiw-steps-text">
                    Download your resume, print it out and get it ready to send!
                  </p>
                </div>
              </div>
            </div>
            <div className="hiw-right">
              <img src={Images.HowItWorks} alt="" />
              <Link to="/select" className="btn btn-orange">
                <span className="btn-text">Create My Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksScreen;
