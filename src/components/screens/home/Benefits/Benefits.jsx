import { FaRegStar } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { LuClock1 } from "react-icons/lu";
import { IoLockOpenOutline } from "react-icons/io5";
import { BsLightbulb } from "react-icons/bs";
import { GiPapers } from "react-icons/gi";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-wrap">
          <h3 className="benefits-ttl">What are the benefits of Smart CV?</h3>
          <div className="benefits-items">
            <div className="benefits-item">
              <div className="benefits-icon">
                <FaRegStar size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">Professional Resume Builder</p>
                <p className="benefits-info-text">
                  Our resume builder is packed with expert tips to show you how
                  to make each part of your resume.
                </p>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-icon">
                <GoGraph size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">Free Resume Templatesr</p>
                <p className="benefits-info-text">
                  Our templates were all designed to provide you free of cost.
                </p>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-icon">
                <LuClock1 size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">Resume Check</p>
                <p className="benefits-info-text">
                  Our Resume Builder reviews your resume in real-time.
                </p>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-icon">
                <IoLockOpenOutline size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">Easy Resume Builder</p>
                <p className="benefits-info-text">
                  Generate a resume using a template matching your resume.
                </p>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-icon">
                <BsLightbulb size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">
                  Fast and Easy to Use Generator
                </p>
                <p className="benefits-info-text">
                  Our resume builder is packed with tips to show you how to make
                  each part of your resume.
                </p>
              </div>
            </div>
            <div className="benefits-item">
              <div className="benefits-icon">
                <GiPapers size={30} />
              </div>
              <div className="benefits-info">
                <p className="benefits-info-ttl">Free Samples</p>
                <p className="benefits-info-text">
                  Explore top resume examples for all jobs and industries to get
                  a job in no time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
