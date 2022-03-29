import './App.css';

//Components
import ClientList from './components/ClientList';
import PaymentsList from './components/PaymentList'

const App = () => {
  return (
    <div className="App">
        <ClientList title="Your Recent Clients" placeholder="Search in all Persona"/>
        <PaymentsList title="Your Business Payments" placeholder="Search a Payment" />
    </div>
  );
}

export default App;
