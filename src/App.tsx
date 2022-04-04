import './App.css';

//Components
import {ClientList} from './components/dashboard/client-list/ClientList';
import {PaymentsList} from './components/dashboard/payments-list/PaymentList'

const App = () => {
  return (
    <div className="App">
        <ClientList title="Your Recent Clients" placeholder="Search in all Persona"/>
        <PaymentsList title="Your Business Payments" placeholder="Search a Payment" />
    </div>
  );
}

export default App;
