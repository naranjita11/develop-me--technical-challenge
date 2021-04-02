import './App.css';
import {
  Router,
  Route,
  // Switch,
} from "react-router-dom";
import history from "./history";
import Header from "../src/components/Header";
import PlayerDisplay from "./components/PlayerDisplay";
import Round from "./components/Round";
// import FourOhFour from './FourOhFour';

function App() {
  return (
    <Router history={ history }>
      <>
        {/* <Switch> */}
          <Header />
          <Route exact path="/">
            <PlayerDisplay />
          </Route>
          <Route exact path="/started">
            <Round />
          </Route>
        {/* </Switch>
        <FourOhFour /> */}
      </>
    </Router>
  );
}

export default App;
