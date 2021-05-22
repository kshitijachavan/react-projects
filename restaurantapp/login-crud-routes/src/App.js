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
import { Navbar, Nav } from 'react-bootstrap'
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/login">login</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul> */}
        {/* <Route path="/list">
          <RestuarantList></RestuarantList>
        </Route>
        <Route path="/search">
          <RestuarantSearch></RestuarantSearch>
        </Route> */}
        {/* <Route path="/update/:id"
          render={props => (
            <RestuarantUpdate {...props}></RestuarantUpdate>
          )}
        >
        </Route> */}
        {/* <Route path="/create">
          <RestuarantCreate></RestuarantCreate>
        </Route> */}
        <Route path="/login"
          render={props => (
            <Login {...props}></Login>
          )}
        >
        </Route>

        <Route path="/logout">
          <Logout></Logout>
        </Route>
        {/* <Route exact path="/">
          <Home></Home>
        </Route> */}
        <Protected exact path="/create" component={RestuarantCreate}></Protected>
        <Protected exact path="/search" component={RestuarantSearch}></Protected>
        <Protected exact path="/list" component={RestuarantList}></Protected>
        <Protected exact path="/update/:id" component={RestuarantUpdate}></Protected>
        <Protected exact path="/" component={Home}></Protected>
      </Router>
    </div>
  );
}

export default App;
