import PlayerButton from "./PlayerButton";
import { useState } from "react";

const GamePairs = ({ name1, name2, handleSubmit }) => {

    const [selected, setSelected] = useState(0);

    const handlePassData1 = () => {
        setSelected(1);
        handleSubmit(name1);
    }

    const handlePassData2 = () => {
        setSelected(2);
        handleSubmit(name2);
    }

    const badgeStylingVs = {
        fontSize: 1 + "rem",
        backgroundColor: "white",
        color: "grey",
        fontWeight: 400,
    }

    return (
        <div className="mb-4 text-center">
            <PlayerButton
                selected={ selected === 1 }
                disableCondition={ name1 === "?" }
                handleSelect={ handlePassData1 }
                name={ name1 }
            />

            <span className="badge m-2" style={ badgeStylingVs }>plays</span>
            
            <PlayerButton
                selected={ selected === 2 }
                disableCondition={ name2 === "?" }
                handleSelect={ handlePassData2 }
                name={ name2 }
            />
        </div>
    );
      
}

export default GamePairs;