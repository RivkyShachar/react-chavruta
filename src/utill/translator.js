// translator.js
import enTranslations from '../locals/en.json';
import heTranslations from '../locals/he.json';

const translations = {
  en: enTranslations,
  he: heTranslations,
};

const translate = (key, lang) => {
  const keys = key.split('.');
  let currentTranslation = translations[lang];

  for (const k of keys) {
    if (!currentTranslation || !currentTranslation[k]) {
      return key; // Return the key itself if translation not found
    }
    currentTranslation = currentTranslation[k];
  }

  return currentTranslation;
};

export default translate;
