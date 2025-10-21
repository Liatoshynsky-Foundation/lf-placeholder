import './App.css';

import Contacts from '~/components/Contacts/Contacts';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';

import type { Lang } from './types/lang';

import Typography from '~/design/Typography/Typography';

function App() {
  const lang: Lang = 'en';

  return (
    <>
      <div className="App">
        <div>
          <Header lang={lang} />
          <div style={{ textAlign: 'left', marginTop: '64px' }}>
            <Typography variant="h" style={{ marginBottom: '24px' }}>
              TechNICal PaUse
            </Typography>
            <Typography variant="body1" style={{ maxWidth: '500px' }}>
              Our team is working on updating the Lyatoshinsky Foundation website. Very soon it will open for you in a
              new look.
            </Typography>
          </div>
        </div>
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
