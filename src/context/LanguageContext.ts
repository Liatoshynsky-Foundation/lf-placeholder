import { createContext } from 'react';

import { type Lang } from '~/types/lang';

export interface LanguageContextType {
  lang: Lang;
  switchLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
