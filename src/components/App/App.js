import "../../App.css";
// import {
  // Router,
  // Route,
  // Switch,
// } from "react-router-dom";
// import history from "./history";
import Header from "../Header";
import Settings from "../Settings";
import QuarterFinals from "../QuarterFinals";
import SemiAndFinals from "../SemiAndFinals";
import Success from "../Success";
// import FourOhFour from './FourOhFour';

function App({ stage }) {

  let currentStage = <Settings />

  if (stage === "quarterFinals") {
    currentStage = <QuarterFinals />
  };

  if (stage === "semiAndFinals") {
    currentStage = <SemiAndFinals />
  };

  if (stage === "success") {
    currentStage = <Success />
  };
  
  return (
    <>
      <Header />
      { currentStage }
    </>

    // <Router history={ history }>
    //   <>
    //     <Switch>
    //       <Header />
    //       <Route exact path="/">
    //         <PlayerDisplay />
    //       </Route>
    //       <Route exact path="/started">
    //         <Round />
    //       </Route>


    //     </Switch>
    //     <FourOhFour />
    //   </>
    // // </Router>
  );
}

export default App;
