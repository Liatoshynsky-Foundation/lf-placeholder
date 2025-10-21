import { useState } from 'react';

import { Lang, supportedLanguages } from '../types/lang';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en');

  function changeLanguage(newLang: Lang) {
    if (supportedLanguages.includes(newLang)) {
      setLang(newLang);
    } else {
      console.warn(`Unsupported language: ${newLang}`);
    }
  }

  return { lang, changeLanguage };
}
