import { Outlet } from "react-router-dom";
import "./ResumeContainer.scss";
import ResumeSidebar from "../../../components/screens/resume/ResumeSidebar/ResumeSidebar";

const ResumeContainer = () => {
  return (
    <div className="pg-resume-container">
      <ResumeSidebar />
      <div className="resume-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default ResumeContainer;
