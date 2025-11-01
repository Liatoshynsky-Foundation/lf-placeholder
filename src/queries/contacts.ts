export type MediaLink = {
  name: string;
  href: string;
};

export type Contacts = {
  phone: string;
  email: string;
  links: MediaLink[];
};

const API_URL = import.meta.env.VITE_BACKEND_URL || '';

export async function GetContacts(): Promise<[Contacts, null] | [null, string]> {
  try {
    const response = await fetch(`${API_URL}/api/contacts`);
    // Please remind me to remove debug logs before merge
    console.log('Fetch response:', response);
    if (!response.ok) {
      return [null, `Error: ${response.status} ${response.statusText}`];
    }
    const data = await response.json();
    // Please remind me to remove debug logs before merge
    console.log('Contacts:', data);
    return [data, null];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [null, 'Error fetching contacts'];
  }
}
