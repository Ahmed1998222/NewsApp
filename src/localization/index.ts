import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import { retrieveData, storeData } from '../utils/storageController';
import RNRestart from 'react-native-restart';

import en from './en';
import ar from './ar';
i18n.fallbacks = true;
i18n.translations = { en, ar };

retrieveData('lang').then((language?: string) => {
  if (language === undefined) {
    storeData('lang', 'en');
    i18n.locale = 'en';
    I18nManager.forceRTL(false);
  } else {
    i18n.locale = language;
  }
});

export const changeLanguage = (language: 'ar' | 'en') => {
  storeData('lang', language);
  i18n.locale = language;
  I18nManager.forceRTL(language === 'ar');
  RNRestart.Restart();
};

export const isRTL = I18nManager.isRTL;

export function strings(name: string, params = {}) {
  return i18n.t(name, params);
}

export const getCurrentLanguage = () => i18n.currentLocale();
export const getCurrentLanguageName = () =>
  i18n.currentLocale() === 'en' ? 'english' : 'arabic';

export default i18n;
