import './App.css';
import Homepage from './pages/Homepage';
import EventResults from './pages/Results';
import Event from './pages/Event';
import CheckIn from './pages/CheckIn';
function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <Event></Event>
      <CheckIn></CheckIn>
      <EventResults> </EventResults>
    </div>
  );
}

export default App;
