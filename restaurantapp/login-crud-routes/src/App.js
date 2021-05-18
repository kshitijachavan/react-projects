import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';
import Home from './components/Home'
import RestuarantList from './components/RestuarantList'
import RestuarantDetail from './components/RestuarantDetail'
import RestuarantSearch from './components/RestuarantSearch'
import RestuarantCreate from './components/RestuarantCreate'
import RestuarantUpdate from './components/RestuarantUpdate'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
        <Route path="/list">
          <RestuarantList></RestuarantList>
        </Route>
        <Route path="/search">
          <RestuarantSearch></RestuarantSearch>
        </Route>
        <Route path="/update">
          <RestuarantUpdate></RestuarantUpdate>
        </Route>
        <Route path="/create">
          <RestuarantCreate></RestuarantCreate>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Router>      
    </div>
  );
}

export default App;
