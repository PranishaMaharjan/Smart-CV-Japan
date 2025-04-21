// import SkillTips from "../Skill/SkillTips";
import SkillAdd from "../Skill/SkillAdd";
import SummaryTips from "../Summary/SummaryTips";
import SummaryAdd from "../Summary/SummaryAdd";
import ExtraSectionsAdd from "../ExtraSections/ExtraSectionsAdd";
import PassportUpload from "../Skill/PassportUpload";

const Certifications = () => {
  return (
    <div className="pg-certifications">
      <PassportUpload />
      <SkillAdd />
      <SummaryTips />
      <SummaryAdd />
      <ExtraSectionsAdd />
    </div>
  );
};

export default Certifications;
