import { Switch, Route } from "react-router-dom";
import Joke from "./components/Joke";
import SubmitJoke from "./components/SubmitJoke";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Joke} />
        <Route exact path="/submitjoke" component={SubmitJoke} />
      </Switch>
    </div>
  );
}

export default App;
