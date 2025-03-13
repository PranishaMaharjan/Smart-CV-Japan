import "./TestimonySingle.scss";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";

const TestimonySingle = () => {
  return (
    <section className="testimony-single">
      {/* <div className="testimony-single-wrap">
          <blockquote>
            I found an article about how to write a professional resume on this
            site. Then I discovered the application. It&apos;s useful and simple
            to use. It&apos;s a free resume builder and I guess you can&apos;t
            have everything.
          </blockquote>
          <p className="quote-person">Mr. John Doe</p>
        </div> */}

      <div className="steps-container h-[650px] pt-[80px] pl-[60px] pr-[60px] bg-primary-90">
        <h1 className="steps-title font-bold text-[40px] text-center mb-10">
          Simple Steps to Create Your CV
        </h1>
        <div className="steps-flow flex h-[192px] justify-between text-primary-90">
          <div className="steps-flow-boxes w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="step-title font-semibold text-[24px] p-1">
              1. Login / Register
            </p>
            <p className="step-description font-400 text-[16px]">
              Register at Smart CV Japan or login to your account. Start working
              on the professional CV that suites your industry.
            </p>
          </div>

          <div className="steps-flow-boxes w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="step-title font-semibold text-[24px] p-1">
              2. Fill In Your Detail
            </p>
            <p className="step-description font-400 text-[16px]">
              Enter your details, work experience, education and key skills. Add
              an intro video to highlight your personality and expertise.
            </p>
          </div>

          <div className="steps-flow-boxes w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="step-title font-semibold text-[24px] p-1">
              3. Publish & Download
            </p>
            <p className="step-description font-400 text-[16px]">
              Review your CV layout and make necessary adjustments. Publish your
              CV and tailor your CV for your selected industry.
            </p>
          </div>
        </div>

        <div className="added-description flex justify-center h-[120px]">
          <p className="pt-10 w-[640px] text-center text-[16px] font-normal">
            Instantly edit and download high quality templates.
            <br />
            Real time customization made easy.
          </p>
        </div>

        <div className="btn-steps">
          <Link to="/how_it_works" className="btn btn-red">
            <span className="btn-icon">
              <CgNotes size={24} />
            </span>
            <span className="btn-text">Create my CV</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonySingle;
