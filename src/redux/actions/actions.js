// redux/actions.js
import axios from "axios";

export const TRANSLATE_CV = "TRANSLATE_CV";
export const TRANSLATE_CV_ERROR = "TRANSLATE_CV_ERROR";

const API_URL = "https://libretranslate.com/translate";
const API_KEY = "your_api_key"; // Add your API key if required

export const translateCv = (cvData) => async (dispatch) => {
  try {
    const textToTranslate = `
      Name: ${cvData.firstName} ${cvData.surName}
      Profession: ${cvData.profession}
      Location: ${cvData.cityOrMunicipality}, ${cvData.country}, ${cvData.postalCode}
      Contact: ${cvData.phone}, ${cvData.email}
    `;

    const response = await axios.post(API_URL, {
      q: textToTranslate,
      source: "en",
      target: "ja",
      format: "text",
      api_key: API_KEY, // Add if required
    });

    dispatch({
      type: TRANSLATE_CV,
      payload: response.data.translatedText, // Store as a single translated string
    });
  } catch (error) {
    console.error("Translation failed:", error);

    dispatch({
      type: TRANSLATE_CV_ERROR,
      payload: "Translation failed. Please try again later.",
    });
  }
};
