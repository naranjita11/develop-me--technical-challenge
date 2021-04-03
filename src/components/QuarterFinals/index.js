import { connect } from "react-redux";
import QuarterFinals from "./QuarterFinals";
import { saveQuarterFinals } from "../../data/actions";

const mapStateToProps = state => {
    return {
      randomisedPlayers: state.randomisedPlayers,
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveQuarterFinals(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuarterFinals);
