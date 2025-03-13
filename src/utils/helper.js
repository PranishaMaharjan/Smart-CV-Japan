export const saveToLocalStorage = (data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem("resume", serializedState);
  } catch (error) {
    console.error("Error saving to local storage.", error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem("resume");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error loading data from local storage:", error);
    return undefined;
  }
};

export const removeFromLocalStorage = () => {
  try {
    localStorage.removeItem("resume");
  } catch (error) {
    console.error("Error removing data from local storage.");
  }
};

export const isObjectEmpty = (obj) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object") {
        if (!isObjectEmpty(obj[key])) {
          return false;
        }
      } else if (Array.isArray(obj[key])) {
        if (obj[key].length > 0) {
          return false;
        }
      } else {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
          return false;
        }
      }
    }
  }

  return true;
};
