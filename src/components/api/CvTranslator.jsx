import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ResumeTranslator = () => {
  const resume = useSelector((state) => state.resume); // Fetching resume object from Redux
  const [resumeJapan, setResumeJapan] = useState({});

  useEffect(() => {
    if (resume && Object.keys(resume).length > 0) {
      translateResume(resume);
    }
  }, [resume]);

  const translateText = async (text) => {
    try {
      const response = await axios.get(
        "https://translate.googleapis.com/translate_a/single",
        {
          params: {
            client: "gtx",
            sl: "auto", // Detect language automatically
            tl: "ja", // Target: Japanese
            dt: "t",
            q: text,
          },
        }
      );
      return response.data[0][0][0]; // Extract translated text
    } catch (error) {
      console.error("Translation error:", error);
      return text; // Return original text if translation fails
    }
  };

  const translateResume = async (resumeObj) => {
    let translatedResume = {};

    for (const key in resumeObj) {
      if (typeof resumeObj[key] === "string") {
        // Translate string values
        translatedResume[key] = await translateText(resumeObj[key]);
      } else if (Array.isArray(resumeObj[key])) {
        // Translate array values (if array contains objects, translate each key)
        translatedResume[key] = await Promise.all(
          resumeObj[key].map(async (item) => {
            if (typeof item === "string") {
              return await translateText(item);
            } else if (typeof item === "object") {
              let translatedItem = {};
              for (const subKey in item) {
                translatedItem[subKey] = await translateText(item[subKey]);
              }
              return translatedItem;
            }
            return item;
          })
        );
      } else if (typeof resumeObj[key] === "object") {
        // Translate nested objects
        let translatedNestedObj = {};
        for (const subKey in resumeObj[key]) {
          translatedNestedObj[subKey] = await translateText(
            resumeObj[key][subKey]
          );
        }
        translatedResume[key] = translatedNestedObj;
      } else {
        // Keep other types (numbers, booleans) unchanged
        translatedResume[key] = resumeObj[key];
      }
    }

    setResumeJapan(translatedResume);
  };

  return (
    <div>
      <h2>Original Resume:</h2>
      <pre>{JSON.stringify(resume, null, 2)}</pre>

      <h2>Translated Resume (Japanese):</h2>
      <pre>{JSON.stringify(resumeJapan, null, 2)}</pre>
    </div>
  );
};

export default ResumeTranslator;
