import cookieParser from 'cookie-parser';
import type { Request, Response } from 'express';
import express from 'express';
import path from 'path';

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'static')));
// parse cookies into req.cookies
app.use(cookieParser());

function nextLang(currentLang: string): string {
  const languages = ['ua', 'en'];
  const currentIndex = languages.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % languages.length;
  return languages[nextIndex];
}

app.get('/', (req: Request, res: Response) => {
  const allowed = new Set(['en', 'ua']);
  const defaultLang = 'ua';
  const cookieLang = typeof req.cookies?.lang === 'string' ? req.cookies.lang : undefined;
  // accept only 'en' or 'ua', otherwise use default and (re)set cookie
  const lang = cookieLang && allowed.has(cookieLang) ? cookieLang : defaultLang;
  if (cookieLang !== lang) {
    // set or correct the cookie when missing or invalid
    res.cookie('lang', lang, { maxAge: 90_0000, httpOnly: true });
  }

  console.log(`Language selected: ${lang}`);

  res.render('index', {
    header: {
      changeLang: 'Eng',
      lang: nextLang(lang)
    },
    body: {
      title: 'Home',
      text: 'Welcome to our website!'
    },
    contacts: {
      phoneText: 'Call Us',
      emailText: 'Email Us',
      socialMediaText: 'Follow Us',

      phone: '+1-234-567-890',
      email: 'info@example.com',
      mediaLinks: [
        { href: 'https://facebook.com', name: 'facebook' },
        { href: 'https://youtube.com', name: 'youtube' },
        { href: 'https://instagram.com', name: 'instagram' }
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
