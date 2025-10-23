export type TranslationKeys = keyof typeof import('~/locales/uk.json');

import type UK_TRANSLATIONS from '~/locales/uk.json';

export type TranslationStructure = typeof UK_TRANSLATIONS;

export type TranslationDomains = keyof TranslationStructure;

export type TranslationMap = {
  [D in TranslationDomains]: keyof TranslationStructure[D];
};

export type Translator<D extends TranslationDomains> = (key: TranslationMap[D]) => string;

export type EnforcedTranslation<T extends TranslationStructure> = {
  [K in keyof T]: {
    [L in keyof T[K]]: string;
  };
};
