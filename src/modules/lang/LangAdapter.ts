import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './localization/en.json';
import ru from './localization/ru.json';
import {LangType} from './LangType';
export const defaultNS = 'common';
export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: LangType.RU,
  compatibilityJSON: 'v3',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
