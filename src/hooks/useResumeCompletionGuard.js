import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectResume } from "../redux/selectors/resumeSelectors";
import { useEffect } from "react";
import { isObjectEmpty } from "../utils/helper";

const useResumeCompletionGuard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resumeData = useSelector(selectResume);

  useEffect(() => {
    const routeOrder = [
      "/resume/contact",
      "/resume/education",
      "/resume/workhistory",
      "/resume/skill",
      "/resume/summary",
      "/resume/extra",
    ];

    const currentIndex = routeOrder.findIndex((route) =>
      location.pathname.includes(route)
    );
    // If the current route is not found or it's the first route, do nothing
    if (currentIndex === -1 || currentIndex === 0) {
      return;
    }
    // Check if the previous route's corresponding resume data is empty
    const previousRoute = routeOrder[currentIndex - 1];
    const previousData = getResumeDataForRoute(previousRoute);

    if (isObjectEmpty(previousData)) {
      navigate(previousRoute + "/add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, resumeData, navigate]);

  const getResumeDataForRoute = (route) => {
    const propertyName = route.split("/").pop();
    return resumeData[propertyName + "Info"];
  };
};

export default useResumeCompletionGuard;
