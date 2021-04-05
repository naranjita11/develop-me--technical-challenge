import { connect } from "react-redux";
import Success from "./Success";

const mapStateToProps = state => {
    return {
      winner: state.winner,
    };
  };

export default connect(mapStateToProps)(Success);