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
      summaryInfo: {
        reason: "",
        selfPromotion: "",
        requests: "",
        vision: "",
      },
      extraInfo: {
        languages: [],
        hobbies: [],
        portfolios: [],
        certifications: [],
        passportFiles: [],
        jftn4Files: [],
      },
      loading: {
        educationInfo: false,
        contactInfo: false,
        workHistoryInfo: false,
      },
    };

// Async thunk to submit contact info to the backend
export const submitContactInfo = createAsyncThunk(
  "resume/submitContactInfo",
  async (contactInfo, { rejectWithValue }) => {
    console.log(contactInfo, "con");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact-info",
        contactInfo
      );

      // Log the raw API response to check its structure
      console.log("API response:", response);

      return response.data; // Make sure this is the expected data structure
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const submitEducationInfo = createAsyncThunk(
  "resume/submitEducationInfo",
  async (educationInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/education-info",
        { education: educationInfo }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.response?.data || error.message
      );
    }
  }
);

export const submitWorkHistoryInfo = createAsyncThunk(
  "resume/submitWorkHistoryInfo",
  async (workHistoryInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/workhistory-info",
        { education: workHistoryInfo }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    RESET_RESUME: () => {
      localStorage.removeItem("resumeData");
      return initialState;
    },
    updateContactInfo: (state, action) => {
      // Ensure the payload is an object
      if (typeof action.payload === "object" && action.payload !== null) {
        state.contactInfo = {
          ...state.contactInfo,
          ...action.payload,
        };
      } else {
        console.error("Invalid payload structure:", action.payload);
      }
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

    addOrUpdateSummaryInfo: (state, action) => {
      state.summaryInfo = action.payload;
      saveToLocalStorage(state);
    },

    addOrUpdatePassportFiles: (state, action) => {
      state.passportFiles = action.payload;
    },

    addOrUpdateJFTN4Files(state, action) {
      state.jftn4Files = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitContactInfo.pending, (state) => {
        state.loading.contactInfo = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitContactInfo.fulfilled, (state, action) => {
        state.loading.contactInfo = false;
        state.success = true;

        // Log the payload to verify its structure
        console.log("submitContactInfo.fulfilled payload:", action.payload);

        // Check if payload is a valid object and contains the expected fields
        if (action.payload && typeof action.payload === "object") {
          const {
            uploadImage,
            firstName,
            surName,
            profession,
            cityOrMunicipality,
            country,
            postalCode,
            phone,
            email,
          } = action.payload;

          // Update the contactInfo state with the payload data or keep the previous state for missing properties
          state.contactInfo = {
            uploadImage: uploadImage || state.contactInfo.uploadImage,
            firstName: firstName || state.contactInfo.firstName,
            surName: surName || state.contactInfo.surName,
            profession: profession || state.contactInfo.profession,
            cityOrMunicipality:
              cityOrMunicipality || state.contactInfo.cityOrMunicipality,
            country: country || state.contactInfo.country,
            postalCode: postalCode || state.contactInfo.postalCode,
            phone: phone || state.contactInfo.phone,
            email: email || state.contactInfo.email,
          };
        } else {
          // Log an error if the payload is invalid
          console.error("Unexpected payload structure:", action.payload);

          // Reset to default contactInfo structure in case of malformed data
          state.contactInfo = {
            uploadImage: "",
            firstName: "",
            surName: "",
            profession: "",
            cityOrMunicipality: "",
            country: "",
            postalCode: "",
            phone: "",
            email: "",
          };
        }
      })
      .addCase(submitContactInfo.rejected, (state, action) => {
        state.loading.contactInfo = false;
        state.error = action.payload;
      })

      .addCase(submitEducationInfo.pending, (state) => {
        state.loading.educationInfo = true;
      })
      .addCase(submitEducationInfo.fulfilled, (state) => {
        state.loading.educationInfo = false;
      })
      .addCase(submitEducationInfo.rejected, (state, action) => {
        state.loading.educationInfo = false;
        state.error = action.payload;
      })
      .addCase(submitWorkHistoryInfo.pending, (state) => {
        state.loading.workHistoryInfo = true;
      })
      .addCase(submitWorkHistoryInfo.fulfilled, (state, action) => {
        state.loading.workHistoryInfo = false;
        state.workHistoryInfo = action.payload;
      })
      .addCase(submitWorkHistoryInfo.rejected, (state, action) => {
        state.loading.workHistoryInfo = false;
        state.error = action.payload;
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
  addOrUpdatePassportFiles,
  addOrUpdateJFTN4Files,
} = resumeSlice.actions;
export default resumeSlice.reducer;
