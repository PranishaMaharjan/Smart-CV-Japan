// import ResumeContainer from "../ResumeContainer/ResumeContainer";
import Contact from "../Contact/Contact";
import EducationTips from "../Education/EducationTips";
import EducationList from "../Education/EducationList";
import EducationAdd from "../Education/EducationAdd";
// import EducationEdit from "../../Resume/Education/EducationEdit";
import WorkHistoryTips from "../WorkHistory/WorkHistoryTips";
import WorkHistoryList from "../WorkHistory/WorkHistoryList";
import WorkHistoryAdd from "../WorkHistory/WorkHistoryAdd";
// import WorkHistoryEdit from "../../Resume/WorkHistory/WorkHistoryEdit";
import SummaryAdd from "../../Resume/Summary/SummaryAdd";

const PersonalDetails = () => {
  return (
    <div className="pg-personalDetails">
      {/* <ResumeContainer /> */}
      <Contact />
      {/* <EducationTips /> */}
      <EducationAdd />
      <EducationList />
      {/* <EducationEdit /> */}
      {/* <WorkHistoryTips /> */}
      <WorkHistoryAdd />
      <WorkHistoryList />
      <SummaryAdd />
    </div>
  );
};

export default PersonalDetails;
