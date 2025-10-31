import './SocialMedia.css';

import { useTranslation } from '~/hooks/useTranslation';

import Typography from '~/design/Typography/Typography';

interface SocialMediaProps {
  mediaLinks?: {
    name: string;
    href: string;
  }[];
}

export default function SocialMedia({ mediaLinks }: SocialMediaProps) {
  const t = useTranslation('contacts');

  return (
    <div>
      <Typography variant="body2">{t('socialMedia')}</Typography>

      <div className="social-media-container">
        {mediaLinks &&
          mediaLinks.map((link) => (
            <a key={link.name} href={link.href}>
              <img src={`/${link.name}.svg`} alt={link.name} />
            </a>
          ))}
      </div>
    </div>
  );
}
