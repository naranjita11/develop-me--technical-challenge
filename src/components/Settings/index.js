import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings, saveQuarterFinals } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveSettings(data)),
        handleSaveQF: (data) => dispatch(saveQuarterFinals(data)),
    };
}

export default connect(null, mapDispatchToProps)(Settings);
