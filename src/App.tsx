import './App.css';

import Contacts from '~/components/Contacts/Contacts';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';

import Body from './components/Body/Body';

import LanguageProvider from '~/context/provider/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <div>
          <Header />
          <Body />
        </div>
        <Contacts />
      </div>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
