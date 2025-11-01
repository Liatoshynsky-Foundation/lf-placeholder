import { useEffect, useState } from 'react';

import { type Contacts, GetContacts } from '~/queries/contacts';

export function useFetch() {
  const [data, setData] = useState<Contacts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await GetContacts();
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
