import { connect } from "react-redux";
import PlayerDisplay from "./PlayerDisplay";
import { saveSettings } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveSettings(data)),
    };
}

export default connect(null, mapDispatchToProps)(PlayerDisplay);
