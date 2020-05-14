import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About"
import Events from "./components/Events/Events"
// import Loader from "react-loading";

function App() {
  // const [state, setstate] = useState(initialState);
  return (
    <div className="App">
      {/* <Loader className="loader" type="bars" color="var(--green-color)" /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </div>
  );
}

export default App;
