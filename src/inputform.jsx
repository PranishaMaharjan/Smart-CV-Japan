import axios from "axios";

async function translateText(text) {
  try {
    const response = await axios.get(
      "https://translate.googleapis.com/translate_a/single",
      {
        params: {
          client: "gtx",
          sl: "auto", // Auto-detect source language
          tl: "ja", // Translate to Japanese
          dt: "t",
          q: text,
        },
      }
    );

    console.log("Translated Text:", response.data[0][0][0]); // Extracting translated text
  } catch (error) {
    console.error("Translation error:", error);
  }
}

// Test the function
translateText("Hello, how are you?");
