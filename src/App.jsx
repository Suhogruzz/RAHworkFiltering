import './App.css';
import ServiceAdd from './components/indexComponents/serviceAdd';
import ServiceList from './components/indexComponents/serviceList';

export default function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}