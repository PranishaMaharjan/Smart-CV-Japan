// import SkillTips from "../Skill/SkillTips";
import JFTN4Pass from "../Skill/JFTN4Pass";
import SummaryTips from "../Summary/SummaryTips";
import SummaryAdd from "../Summary/SummaryAdd";
import ExtraSectionsAdd from "../ExtraSections/ExtraSectionsAdd";
import PassportUpload from "../Skill/PassportUpload";
import EducationalCertification from "../Skill/EducationalCertification";
import SkillExperience from "../Skill/SkillExperience";

const Certifications = () => {
  return (
    <div className="pg-certifications">
      <PassportUpload />
      <JFTN4Pass />
      <EducationalCertification />
      <SkillExperience />
      {/* <SummaryTips />
      <SummaryAdd /> */}
      <ExtraSectionsAdd />
    </div>
  );
};

export default Certifications;
