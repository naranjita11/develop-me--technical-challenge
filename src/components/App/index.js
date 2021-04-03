import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
  return {
    stage: state.stage,
  };
};

export default connect(mapStateToProps)(App);