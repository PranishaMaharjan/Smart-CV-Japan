export const selectResume = (state) => state?.resume;

export const selectContactInfo = (state) => state?.resume?.contactInfo;

export const selectEducationInfo = (state) => state?.resume?.educationInfo;

export const selectEducationInfoById = (state, id) => {
  return state?.resume?.educationInfo.find((edu) => edu.id === id);
};

export const selectWorkHistoryInfo = (state) => state?.resume?.workhistoryInfo;

export const selectWorkHistoryInfoById = (state, id) => {
  return state?.resume?.workhistoryInfo.find((work) => work.id === id);
};

export const selectSkillInfo = (state) => state?.resume?.skillInfo;

export const selectSummaryInfo = (state) => state?.resume?.summaryInfo;

export const selectExtraInfo = (state) => state?.resume?.extraInfo;