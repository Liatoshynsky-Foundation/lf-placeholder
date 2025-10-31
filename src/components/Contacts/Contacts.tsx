import './Contacts.css';

import { useFetch } from '~/hooks/useFetch';

import ContactMethods from './ContactMethods/ContactMethods';
import SocialMedia from './SocialMedia/SocialMedia';

export default function Contacts() {
  const { data, loading, error } = useFetch();

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error: {error}</div>;

  return (
    <div className="contacts-container">
      <ContactMethods email={data.email} phone={data.phone} />
      <SocialMedia mediaLinks={data.links} />
    </div>
  );
}
