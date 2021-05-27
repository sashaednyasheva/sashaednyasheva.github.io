import './App.css';
import Navigation from './Navigation'
import Home from './components/Home'
import CitySelector from './components/CitySelector'
import ClimateChecker from './components/ClimateChecker'
import Contact from './components/Contact'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommunityTwo from './components/CommunityTwo';


function App() {
  return (
    <Router>
      <div className="App">
    <Navigation/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Home" component={Home}/>
    <Route path="/City-selector" component={CitySelector}/>
    <Route path="/Climate-checker" component={ClimateChecker}/>
    <Route path="/Community" component={CommunityTwo}/>
    <Route path="/Contact" exact component={Contact}/>
    </Switch>  
      </div>
    </Router>


  );
}

export default App;
