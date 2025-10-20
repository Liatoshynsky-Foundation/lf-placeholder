import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import Contacts from '~/components/Contacts/Contacts';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <h1>Fill me up with some content!</h1>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
