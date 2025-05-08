import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdInsertDriveFile,
  MdPerson,
  MdWork,
} from "react-icons/md";
import "./PreviewSidebar.scss";
import routeConstants from "../../../constants/routeConstants";

const PreviewSidebar = () => {
  return (
    <div className="preview-sidebar">
      <div className="sidebar-logo">
        <img src="/SmartCVLogo.png" alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <div className="menu-title">MENU</div>

        <NavLink to={routeConstants.HOME} className="menu-item">
          <MdDashboard className="menu-icon" />
          Dashboard
        </NavLink>

        <NavLink to="/resume/preview" className="menu-item">
          <MdInsertDriveFile className="menu-icon" />
          My CV
        </NavLink>

        <NavLink to="/interview-prep" className="menu-item">
          <MdPerson className="menu-icon" />
          Interview Prep
        </NavLink>

        <NavLink to="/opportunities" className="menu-item">
          <MdWork className="menu-icon" />
          Opportunities
        </NavLink>
      </div>
    </div>
  );
};

export default PreviewSidebar;
