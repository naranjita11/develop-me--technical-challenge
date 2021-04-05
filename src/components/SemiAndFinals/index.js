import { connect } from "react-redux";
import SemiAndFinals from "./SemiAndFinals";
import { saveSemiFinals } from "../../data/actions";
import { saveWinner } from "../../data/actions";

const mapStateToProps = state => {
    return {
      array: state.qfWinners,
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        handleSaveSF: (data) => dispatch(saveSemiFinals(data)),
        handleSaveF: (data) => dispatch(saveWinner(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SemiAndFinals);