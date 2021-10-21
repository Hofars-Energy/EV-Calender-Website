import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Upcoming from './pages/Upcoming';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );  
}

export default App;
