import './ContactMethods.css';

import { useTranslation } from '~/hooks/useTranslation';

import Typography from '~/design/Typography/Typography';

export default function Contacts({ email, phone }: { email: string; phone: string }) {
  const t = useTranslation('contacts');

  return (
    <div className="contact-methods">
      <div className="contact-method-container">
        <Typography variant="body2">{t('phone')}</Typography>
        <a href={`tel:${phone}`}>
          <Typography variant="link">{phone}</Typography>
        </a>
      </div>
      <div className="contact-method-container">
        <Typography variant="body2">{t('email')}</Typography>
        <a href={`mailto:${email}`}>
          <Typography variant="link">{email}</Typography>
        </a>
      </div>
    </div>
  );
}
