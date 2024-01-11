import hebrewTranslations from '../locals/he.json';
import englishTranslations from '../locals/en.json';

const translations = {
  hebrew: hebrewTranslations,
  english: englishTranslations,
};

const translate = (key, lang) => {
  return translations[lang][key] || key;
};

export default translate;