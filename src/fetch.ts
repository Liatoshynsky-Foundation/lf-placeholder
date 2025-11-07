import { Collection, Db, MongoClient } from 'mongodb';

export type SocialLink = {
  icon: string;
  link: string;
};

export type Contacts = {
  email: string;
  phone: string;
  socialLinks: SocialLink[];
};

function defaultContacts(): Contacts {
  return {
    email: 'liatoshynsky@gmail.com',
    phone: '067 963 8366',
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/liatoshynsky_foundation/' },
      { icon: 'facebook', link: 'https://www.facebook.com/LiatoshynskyFoundation/' },
      { icon: 'youtube', link: 'https://www.youtube.com/' }
    ]
  };
}

let client: MongoClient | null = null;
let cachedContacts: Contacts | null = null;
let cacheExpiresAt: Date = new Date(0);

async function Connect(): Promise<Db> {
  const MONGO_URI = process.env.MONGO_URI || '';
  const MONGO_DB = process.env.MONGO_DB || '';

  if (!MONGO_URI || !MONGO_DB) {
    throw new Error('MongoDB URI or Database name is not set in environment variables.');
  }

  if (!client) {
    client = new MongoClient(MONGO_URI);
  }

  await client.connect();

  return client.db(MONGO_DB);
}

export async function fetchContacts(): Promise<Contacts> {
  if (cachedContacts && cacheExpiresAt > new Date()) {
    return cachedContacts;
  }

  cacheExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  try {
    const db = await Connect();
    const col: Collection<Contacts> = db.collection('foundationinfos');

    const doc = await col.findOne({ slug: 'contact-info' });

    if (!doc || !doc.email || !doc.phone || !Array.isArray(doc.socialLinks)) {
      return defaultContacts();
    }

    cachedContacts = doc;

    return cachedContacts;
  } catch {
    return defaultContacts();
  }
}

process.on('SIGINT', async () => {
  if (client) await client.close();
  process.exit(0);
});
