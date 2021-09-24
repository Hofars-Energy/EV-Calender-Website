import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;