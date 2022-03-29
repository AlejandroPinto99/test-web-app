import './App.css';

//Components
import SearchSection from './components/SearchSection'

const App = () => {
  return (
    <div className="App">
        <SearchSection title="Your Recent Clients" height={40} placeholder="Search in all Persona"/>
        <SearchSection title="Your Business Payments" height={80} placeholder="Search a Payment"/>
    </div>
  );
}

export default App;
