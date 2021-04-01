export const saveSettings = ({ randomisedPlayers }) => {
    return {
      type: "SAVE_SETTINGS",
      randomisedPlayers: randomisedPlayers,
    };
  };