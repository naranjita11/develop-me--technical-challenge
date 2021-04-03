import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveSettings(data)),
    };
}

export default connect(null, mapDispatchToProps)(Settings);
