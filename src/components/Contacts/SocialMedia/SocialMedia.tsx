import './SocialMedia.css';

import { useTranslation } from '~/hooks/useTranslation';

import Typography from '~/design/Typography/Typography';

export default function SocialMedia() {
  const t = useTranslation('contacts');

  return (
    <div>
      <Typography variant="body2">{t('socialMedia')}</Typography>
      <div className="social-media-container">
        <a href="https://www.instagram.com/liatoshynsky_foundation/">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/LiatoshynskyFoundation/">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com/">
          <img src="/youtube.svg" alt="YouTube" />
        </a>
      </div>
    </div>
  );
}
