export const saveSettings = ({ randomisedPlayers }) => {
  return {
    type: "SAVE_SETTINGS",
    randomisedPlayers: randomisedPlayers,
  };
};

export const saveQuarterFinals = ({ randomisedPlayers }) => {
  return {
    type: "SAVE_QUARTERFINALS",
    randomisedPlayers: randomisedPlayers,
  };
};