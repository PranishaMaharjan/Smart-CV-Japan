import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helper";
import axios from "axios";

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
      loading: false,
      error: null,
      success: false,
    };

// Async thunk to submit contact info to the backend
export const submitContactInfo = createAsyncThunk(
  "resume/submitContactInfo",
  async (contactInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact-info",
        contactInfo
      );
      return response.data; // Assuming the response contains the necessary data
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    RESET_RESUME: () => {
      // removeFromLocalStorage();
      initialState;
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

  extraReducers: (builder) => {
    builder
      .addCase(submitContactInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitContactInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(submitContactInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
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
  addOrUpdateExtraInfo,
} = resumeSlice.actions;
export default resumeSlice.reducer;
