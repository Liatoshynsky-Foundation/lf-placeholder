import { useState } from 'react';

import type { Lang } from '~/types/lang';

import { LanguageContext } from '~/context/LanguageContext';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('uk');

  const switchLang = () => setLang((prevLang) => (prevLang === 'en' ? 'uk' : 'en'));

  return <LanguageContext.Provider value={{ lang, switchLang }}>{children}</LanguageContext.Provider>;
}
