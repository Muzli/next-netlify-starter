// utilities/Language/getTranslation.js

export default function getTranslation(dictionary, language, key) {
  const languageDictionary = dictionary[language];

  if (!languageDictionary) {
    console.warn(`Unknown language: ${language}`);
    return key;
  }

  const value = key.split(".").reduce((current, segment) => {
    return current?.[segment];
  }, languageDictionary);

  if (typeof value !== "string") {
    console.warn(`Missing translation: ${language}.${key}`);
    return key;
  }

  return value;
}