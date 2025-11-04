import type { Request, Response } from 'express';
import express from 'express';

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.set('view engine', 'ejs');

app.get('/', (_: Request, res: Response) => {
  res.render('template/index', { title: 'Home' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
