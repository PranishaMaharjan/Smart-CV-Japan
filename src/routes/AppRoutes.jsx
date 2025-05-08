import { Route, Routes } from "react-router-dom";
import routeConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer/LayoutContainer";
import Home from "../screens/Home/HomeScreen";
import PageNotFound from "../screens/PageNotFound/PageNotFoundScreen";
import HowItWorks from "../screens/HowItWorks/HowItWorksScreen";
import ResumeContainer from "../screens/Resume/ResumeContainer/ResumeContainer";
// import Contact from "../screens/Resume/Contact/Contact";
import SelectCvType from "../screens/Resume/SelectCvType/SelectCvType";
import PersonalDetails from "../screens/Resume/PersonalDetails/PersonalDetails";
import Certifications from "../screens/Resume/Certifications/Certifications";
import IntroVideo from "../screens/Resume/IntroVideo/IntroVideo";
// import EducationTips from "../screens/Resume/sEducation/EducationTips";
// import EducationList from "../screens/Resume/Education/EducationList";
// import EducationAdd from "../screens/Resume/Education/EducationAdd";
// import EducationEdit from "../screens/Resume/Education/EducationEdit";
// import WorkHistoryTips from "../screens/Resume/WorkHistory/WorkHistoryTips";
// import WorkHistoryAdd from "../screens/Resume/WorkHistory/WorkHistoryAdd";
// import WorkHistoryList from "../screens/Resume/WorkHistory/WorkHistoryList";
// import WorkHistoryEdit from "../screens/Resume/WorkHistory/WorkHistoryEdit";
// import SkillTips from "../screens/Resume/Skill/SkillTips";
// import SkillAdd from "../screens/Resume/Skill/SkillAdd";
import SelectScreen from "../screens/Select/SelectScreen";
// import SummaryTips from "../screens/Resume/Summary/SummaryTips";
// import SummaryAdd from "../screens/Resume/Summary/SummaryAdd";
// import ExtraSectionsAdd from "../screens/Resume/ExtraSections/ExtraSectionsAdd";
import Preview from "../screens/Resume/Preview/Preview";
// import { CvTemplate  from "../screens/CvTemplate/CvTemplate";
import CvTemplate from "../screens/Resume/CvTemplate/CvTemplate";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.LOGIN} element={<Login />} />
        <Route path={routeConstants.REGISTER} element={<Register />} />
        <Route path={routeConstants.HOW_IT_WORKS} element={<HowItWorks />} />
        <Route path={routeConstants.SELECT} element={<SelectScreen />} />
      </Route>

      <Route path={routeConstants.RESUME} element={<ResumeContainer />}>
        <Route
          path={routeConstants.RESUME_SELECTCVTYPE}
          element={<SelectCvType />}
        />
        <Route
          path={routeConstants.RESUME_PERSONAL_DETAILS}
          element={<PersonalDetails />}
        />

        <Route
          path={routeConstants.RESUME_CERTIFICATIONS}
          element={<Certifications />}
        />

        <Route
          path={routeConstants.RESUME_INTROVIDEO}
          element={<IntroVideo />}
        />

        <Route
          path={routeConstants.RESUME_CVTEMPLATE}
          element={<CvTemplate />}
        />
      </Route>
      <Route path={routeConstants.RESUME_PREVIEW} element={<Preview />} />
      <Route path={routeConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

{
  /* <Route
          path={routeConstants.RESUME_SKILL_TIPS}
          element={<SkillTips />}
        /> */
}
{
  /* <Route path={routeConstants.RESUME_SKILL_ADD} eleme

        nt={<SkillAdd />} /> */
}
{
  /* <Route
          path={routeConstants.RESUME_SUMMARY_TIPS}
          element={<SummaryTips />}
        /> */
}
{
  /* <Route
          path={routeConstants.RESUME_SUMMARY_ADD}
          element={<SummaryAdd />}
        />
        <Route
          path={routeConstants.RESUME_EXTRA_ADD}
          element={<ExtraSectionsAdd />}
        /> */
}

{
  /* <Route
          path={routeConstants.RESUME_EDUCATION_TIPS}
          element={<EducationTips />}
        />
        <Route
          path={routeConstants.RESUME_EDUCATION_ADD}
          element={<EducationAdd />}
        />
        <Route
          path={routeConstants.RESUME_EDUCATION_LIST}
          element={<EducationList />}
        />
        <Route
          path={`${routeConstants.RESUME_EDUCATION_EDIT}/:id`}
          element={<EducationEdit />}
        />
        <Route
          path={routeConstants.RESUME_WORKHISTORY_TIPS}
          element={<WorkHistoryTips />}
        />
        <Route
          path={routeConstants.RESUME_WORKHISTORY_ADD}
          element={<WorkHistoryAdd />}
        />
        <Route
          path={routeConstants.RESUME_WORKHISTORY_LIST}
          element={<WorkHistoryList />}
        />
        <Route
          path={`${routeConstants.RESUME_WORKHISTORY_EDIT}/:id`}
          element={<WorkHistoryEdit />}
        /> */
}

{
  /* </Route> */
}
