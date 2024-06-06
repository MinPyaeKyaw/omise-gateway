import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './../assets/langs/en';
import mm from './../assets/langs/mm';

const resources = {
  en,
  mm,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
