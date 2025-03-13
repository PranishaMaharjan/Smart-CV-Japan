// import HowItWorks from "../screens/HowItWorks/HowItWorksScreen";
import ResumeContainer from "../screens/Resume/ResumeContainer/ResumeContainer";
import Contact from "../screens/Resume/Contact/Contact";
import EducationTips from "../screens/Resume/Education/EducationTips";
import EducationList from "../screens/Resume/Education/EducationList";
import EducationAdd from "../screens/Resume/Education/EducationAdd";
import EducationEdit from "../screens/Resume/Education/EducationEdit";
import WorkHistoryTips from "../screens/Resume/WorkHistory/WorkHistoryTips";
import WorkHistoryAdd from "../screens/Resume/WorkHistory/WorkHistoryAdd";
import WorkHistoryList from "../screens/Resume/WorkHistory/WorkHistoryList";
import WorkHistoryEdit from "../screens/Resume/WorkHistory/WorkHistoryEdit";
import SkillTips from "../screens/Resume/Skill/SkillTips";
import SkillAdd from "../screens/Resume/Skill/SkillAdd";
import SelectScreen from "../screens/Select/SelectScreen";
import SummaryTips from "../screens/Resume/Summary/SummaryTips";
import SummaryAdd from "../screens/Resume/Summary/SummaryAdd";
import ExtraSectionsAdd from "../screens/Resume/ExtraSections/ExtraSectionsAdd";
import Preview from "../screens/Resume/Preview/Preview";

const BasicInformationScreen = () => {
  return (
    <div className="pg-resume">
      <ResumeContainer />
      <Contact />
      <EducationTips />
      <EducationList />
      <EducationAdd />
      <EducationEdit />
      <WorkHistoryTips />
      <WorkHistoryAdd />
      <WorkHistoryList />
      <WorkHistoryEdit />
      <SkillTips />
      <SkillAdd />
      <SelectScreen />
      <SummaryTips />
      <SummaryAdd />
      <ExtraSectionsAdd />
      <Preview />
    </div>
  );
};

export default BasicInformationScreen;
