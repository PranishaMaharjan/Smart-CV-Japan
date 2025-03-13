import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helper";

const storedResumeData = loadFromLocalStorage();

const initialState = storedResumeData
  ? storedResumeData
  : {
      contactInfo: {
        uploadImage: "",
        firstName: "",
        surName: "",
        profession: "",
        cityOrMunicipality: "",
        country: "",
        postalCode: "",
        phone: "",
        email: "",
      },
      educationInfo: [],
      workhistoryInfo: [],
      skillInfo: [],
      summaryInfo: "",
      extraInfo: {
        languages: [],
        hobbies: [],
        portfolios: [],
        certifications: [],
      },
    };

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    RESET_RESUME: () => {
      removeFromLocalStorage();
      return initialState;
    },
    updateContactInfo: (state, action) => {
      state.contactInfo = {
        ...state.contactInfo,
        ...action.payload,
      };
      saveToLocalStorage(state);
    },

    updateUploadedImage: (state, action) => {
      state.contactInfo.uploadImage = action.payload;
      saveToLocalStorage(state);
    },

    addEducationInfo: (state, action) => {
      state.educationInfo.push(action.payload);
      saveToLocalStorage(state);
    },

    updateEducationInfo: (state, action) => {
      const { id, data } = action.payload;
      state.educationInfo = state.educationInfo.map((item) => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });
      saveToLocalStorage(state);
    },

    removeEducationInfo: (state, action) => {
      const id = action.payload;
      state.educationInfo = state.educationInfo.filter(
        (item) => item.id !== id
      );
      saveToLocalStorage(state);
    },

    addWorkHistoryInfo: (state, action) => {
      state.workhistoryInfo.push(action.payload);
      saveToLocalStorage(state);
    },

    removeWorkHistoryInfo: (state, action) => {
      const id = action.payload;
      state.workhistoryInfo = state.workhistoryInfo.filter(
        (item) => item.id !== id
      );
      saveToLocalStorage(state);
    },

    updateWorkHistoryInfo: (state, action) => {
      const { id, data } = action.payload;
      state.workhistoryInfo = state.workhistoryInfo.map((item) => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });

      saveToLocalStorage(state);
    },

    addOrUpdateSkillInfo: (state, action) => {
      state.skillInfo = action.payload;
      saveToLocalStorage(state);
    },

    addOrUpdateSummaryInfo: (state, action) => {
      state.summaryInfo = action.payload;
      saveToLocalStorage(state);
    },

    addOrUpdateExtraInfo: (state, action) => {
      state.extraInfo = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const {
  RESET_RESUME,
  updateContactInfo,
  updateUploadedImage,
  addEducationInfo,
  updateEducationInfo,
  removeEducationInfo,
  getEducationInfoById,
  addWorkHistoryInfo,
  removeWorkHistoryInfo,
  updateWorkHistoryInfo,
  addOrUpdateSkillInfo,
  addOrUpdateSummaryInfo,
  addOrUpdateExtraInfo
} = resumeSlice.actions;
export default resumeSlice.reducer;
