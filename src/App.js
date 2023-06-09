
import './App.scss';
import Header from "./components/Header/Header";
import SectionPayments from "./components/SectionPayments/SectionPayments";
import SectionSpecials from "./components/SectionSpecials/SectionSpecials";
import SectionTrusted from "./components/SectionTrusted/SectionTrusted";
import SectionClients from "./components/SectionClients/SectionClients";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <SectionPayments/>
            <SectionSpecials/>
            <SectionTrusted/>
            <SectionClients/>
            <Footer/>
        </div>
  );
}

export default App;
