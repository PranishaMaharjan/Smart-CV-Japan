// redux/reducer.js
import { TRANSLATE_CV, TRANSLATE_CV_ERROR } from "./actions";

const initialState = {
  translatedCv: null, // Use `null` instead of an empty object for better state checks
  translationError: null,
  isLoading: false, // Track loading state
};

const cvReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSLATE_CV:
      return {
        ...state,
        translatedCv: action.payload, // Store translated CV text
        translationError: null, // Reset errors if successful
        isLoading: false, // Stop loading after success
      };
    case TRANSLATE_CV_ERROR:
      return {
        ...state,
        translationError: action.payload, // Store error message
        translatedCv: null, // Reset translated data if failed
        isLoading: false, // Stop loading after failure
      };
    default:
      return state;
  }
};

export default cvReducer;
