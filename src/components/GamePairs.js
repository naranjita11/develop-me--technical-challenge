import PlayerButton from "./PlayerButton";
import { useState } from "react";

const GamePairs = () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className="mb-4 text-center">
            <PlayerButton
                selected={ selected === 1 }
                handleSelect={ () => setSelected(1) }
                name="Bob"
            />

            <span className="badge bg-light text-dark">plays</span>

            <PlayerButton
                selected={ selected === 2 }
                handleSelect={ () => setSelected(2) }
                name="Kate"
            />
        </div>
    );
      
}

export default GamePairs;