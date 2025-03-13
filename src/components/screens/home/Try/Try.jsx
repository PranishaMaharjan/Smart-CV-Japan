import { Link } from "react-router-dom";
import "./Try.scss";
import { Images } from "../../../../assets/images";

const Try = () => {
  return (
    <section className="try">
      <div className="container">
        <div className="try-wrap">
          <h3 className="try-ttl">Build, Customize, Succeed</h3>
          <Link to="/how_it_works" className="btn btn-white">
            <span className="btn-text">Create your professional CV </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Try;
