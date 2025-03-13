import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./slices/resumeSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
