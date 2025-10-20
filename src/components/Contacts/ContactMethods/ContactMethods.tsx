import './ContactMethods.css';

import Typography from '~/design/Typography/Typography';

export default function Contacts({ email, phone }: { email: string; phone: string }) {
  return (
    <div className="contact-methods">
      <div className="contact-method-container">
        <Typography variant="body2">Email:</Typography>
        <a href={`mailto:${email}`}>
          <Typography variant="link">{email}</Typography>
        </a>
      </div>
      <div className="contact-method-container">
        <Typography variant="body2">Phone:</Typography>
        <a href={`tel:${phone}`}>
          <Typography variant="link">{phone}</Typography>
        </a>
      </div>
    </div>
  );
}
