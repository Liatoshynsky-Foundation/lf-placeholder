import { useTranslation } from '~/hooks/useTranslation';

import Typography from '~/design/Typography/Typography';

export default function Body() {
  const t = useTranslation('body');

  return (
    <div style={{ textAlign: 'left', margin: '64px 0' }}>
      <Typography variant="h" style={{ marginBottom: '24px' }}>
        {t('title')}
      </Typography>
      <Typography variant="body1" style={{ maxWidth: '500px' }}>
        {t('text')}
      </Typography>
    </div>
  );
}
