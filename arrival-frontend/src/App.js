import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CheckIn from "./pages/CheckIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
    
    <CheckIn></CheckIn>
      
    </div>
    
  );
}

export default App;
