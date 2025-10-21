import { useLanguage } from './useLanguage';
import type { Lang } from '~/types/lang';
import type {
  EnforcedTranslation,
  TranslationDomains,
  TranslationMap,
  TranslationStructure,
  Translator
} from '~/types/translations';

import en from '~/locales/en.json';
import uk from '~/locales/uk.json';

const validatedEn = en as unknown as EnforcedTranslation<TranslationStructure>;

const translations: Record<Lang, TranslationStructure> = {
  en: validatedEn as TranslationStructure,
  uk: uk as TranslationStructure
} as const;

export function useTranslation<D extends TranslationDomains>(domain: D): Translator<D> {
  const { lang } = useLanguage();

  const t = (key: TranslationMap[D]): string => {
    const domainTranslations = translations[lang][domain] as Record<string, string>;
    return domainTranslations[key];
  };

  return t;
}
