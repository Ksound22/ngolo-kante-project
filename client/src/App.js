import { Switch, Route } from "react-router-dom";
import Fact from "./components/Fact";
import SubmitFact from "./components/SubmitFact";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Fact} />
        <Route exact path="/submitfact" component={SubmitFact} />
      </Switch>
    </div>
  );
}

export default App;
