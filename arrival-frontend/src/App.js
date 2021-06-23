import './App.css';
import Homepage from './pages/Homepage';
import EventResults from './pages/Results';
import Event from './pages/Event';
import CheckIn from './pages/CheckIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <Router> 
      <div className="App">
        <Route exact path= {["/", "/Arrival"]}>
      <Homepage/>
        </Route>

        <Route exact path= {["/Event"]}>
          <Event />
        </Route>
        
        <Route exact path= {["/CreateEvent"]}>
          <CreateEvent />
          </Route>

          <Route exact path= {["/CheckIn"]}>
            <CheckIn />
            </Route>

      <Route exact path= {["/Results"]}>
        <EventResults />
        </Route>

      </div>  
      </Router>
  );
}

export default App;
