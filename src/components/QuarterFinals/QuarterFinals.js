// import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const QuarterFinals = ({ array }) => {

    // const [roundWinners, setRoundWinners] = useState([]);

    return (
        <>
            <div className="mt-4 text-center">
                <h4>Click who wins!</h4>
                <GamePairs />
                <GamePairs />
                <GamePairs />
                <GamePairs />

            </div>

            <CreateButton
                // handleCreate={ handleSubmit }
                buttonText="Next round..."
            />
        </>
    );
}

export default QuarterFinals;