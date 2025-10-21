import './Header.css';

import { useLanguage } from '~/hooks/useLanguage';
import { useTranslation } from '~/hooks/useTranslation';

import Typography from '~/design/Typography/Typography';

export default function Header() {
  const { switchLang } = useLanguage();
  const t = useTranslation('header');

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src="/logo.png" alt="Header Logo" style={{ transform: 'translate(-24%)' }} className="logo-img" />
      <button className="language-switch" onClick={switchLang}>
        <img src="/globe.svg" alt="Language Icon" />
        <Typography variant="body2" className="disappearing-text" style={{ color: 'var(--black)' }}>
          {t('changelang')}
        </Typography>
      </button>
    </div>
  );
}
