import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';

import { fetchContacts } from './fetch';
import en from './translation/en.json';
import uk from './translation/uk.json';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'static')));
app.use(cookieParser());

const translations: Record<string, typeof uk> = {
  en,
  uk
};

const defaultLang = 'uk';
const allowed = new Set(['en', 'uk']);

app.get('/', async (req: Request, res: Response) => {
  const cookieLang = typeof req.cookies?.lang === 'string' ? req.cookies.lang : undefined;

  const langToServe = cookieLang && allowed.has(cookieLang) ? cookieLang : defaultLang;

  const nextLang = langToServe === 'uk' ? 'en' : 'uk';
  res.cookie('lang', nextLang, { maxAge: 90_0000, httpOnly: true });

  const t = translations[langToServe];
  const contacts = await fetchContacts();

  if (!contacts) {
    return res.status(500).send('Error fetching contact information.');
  }

  const merger = {
    ...t.contacts,
    ...contacts
  };

  res.render('index', {
    header: t.header,
    body: t.body,
    contacts: merger
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
