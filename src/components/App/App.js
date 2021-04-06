import "../../App.css";
import Header from "../Header";
import Settings from "../Settings";
import QuarterFinals from "../QuarterFinals";
import SemiAndFinals from "../SemiAndFinals";
import Success from "../Success";

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
      { stage !== "success" ? <Header /> : null }
      { currentStage }
    </>
  );
}

export default App;
