// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property

import initial from "./initial";

const saveSettings = (state, { randomisedPlayers }) => {
    return {
    ...state,
    stage: "quarterFinals",
    randomisedPlayers: randomisedPlayers,
    }
};

const saveSettingsQF = (state, { randomisedPlayers }) => {
    return {
    ...state,
    stage: "SemiAndFinals",
    randomisedPlayers: randomisedPlayers,
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "RESET": return initial;
        case "SAVE_SETTINGS": return saveSettings(state, action);
        case "SAVE_QUARTERFINALS": return saveSettingsQF(state, action);
        default: return state;
    }
};


export default reducer;