import Joke from "./components/Joke";
import SubmitJoke from "./components/SubmitJoke";
import { Switch, Route } from "react-router-dom";
import API from "./components/API";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Joke} />
        <Route exact path="/submitjoke" component={SubmitJoke} />
        <Route exact path="/api" component={API} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
