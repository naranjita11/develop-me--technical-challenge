// import { useState } from "react";
import GamePairs from "./GamePairs";

const Game = ({ array }) => {

    // const [roundWinners, setRoundWinners] = useState([]);

    return (
        
        <div className="mt-4 text-center">
            <h4>Click who wins!</h4>
            <GamePairs />
            <GamePairs />
            <GamePairs />
            <GamePairs />

        </div>
        
    );
}

export default Game;