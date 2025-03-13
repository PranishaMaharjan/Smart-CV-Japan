import { Link } from "react-router-dom";
import "./Banner.scss";
import { CgNotes } from "react-icons/cg";
import { Images } from "../../../../assets/images";

const Banner = () => {
  return (
    <section
      className="banner"
      style={
        {
          // background: `url(${Images.HomeBanner}) center/cover no-repeat`,
        }
      }
    >
      <div className="container">
        <div className="banner-wrap">
          <h2 className="banner-ttl">Your Dream Job Starts With a Smart CV</h2>
          <h3 className="banner-lead">
            Professional templates with real time editing, instantly customize
            and downloads your own design in minutes.
          </h3>
          <Link to="/how_it_works" className="btn btn-red">
            <span className="btn-icon">
              <CgNotes size={24} />
            </span>
            <span className="btn-text">Create my CV</span>
          </Link>
        </div>
        <div>
          <div className="banner-japan-images">
            <div className="japan-images">
              <img
                className="japan-image1"
                src="src/assets/images/japan-image1.png"
              ></img>
            </div>
            <div className="japan-images">
              <img
                className="japan-image2"
                src="src/assets/images/japan-image2.png"
              ></img>
            </div>
            <div className="japan-images">
              <img
                className="japan-image3"
                src="src/assets/images/japan-image3.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
