export type Contacts = {
  phone: string;
  email: string;
  links: string[];
};

const API_URL = import.meta.env.VITE_BACKEND_URL || '';

export async function GetContacts(): Promise<[Contacts, null] | [null, string]> {
  const response = await fetch(`${API_URL}/api/contacts`);
  if (!response.ok) {
    return [null, `Error: ${response.status} ${response.statusText}`];
  }
  const data = await response.json();
  console.log('Contacts:', data);
  return [data, null];
}
