export const saveSettings = ({ randomisedPlayers }) => {
  return {
    type: "SAVE_SETTINGS",
    randomisedPlayers: randomisedPlayers,
  };
};

export const saveQuarterFinals = ({ qfWinners }) => {
  return {
    type: "SAVE_QUARTERFINALS",
    qfWinners: qfWinners,
  };
};

export const saveSemiFinals = ({ sfWinners }) => {
  return {
    type: "SAVE_SEMIFINALS",
    sfWinners: sfWinners,
  };
};

export const saveWinner = ({ winner }) => {
  return {
    type: "SAVE_WINNER",
    winner: winner,
  };
};