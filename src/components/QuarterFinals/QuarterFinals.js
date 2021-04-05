import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const QuarterFinals = ({ array, handleSave }) => {

    const [qfWinners, setQfWinners] = useState([]);

    const handleWinnersSubmit = (e) => {
        e.preventDefault();
        handleSave({ qfWinners });
    };

    return (
        <>
            <div className="mt-4 text-center">
                <h4>Click who wins!</h4>
                <GamePairs
                    name1={ array[0] }
                    name2={ array[1] }
                    handleSubmit={ (name) => setQfWinners([...qfWinners, name]) }
                />
                <GamePairs
                    name1={ array[2] }
                    name2={ array[3] }
                    handleSubmit={ (name) => setQfWinners([...qfWinners, name]) }
                />
                <GamePairs
                    name1={ array[4] }
                    name2={ array[5] }
                    handleSubmit={ (name) => setQfWinners([...qfWinners, name]) }
                />
                <GamePairs
                    name1={ array[6] }
                    name2={ array[7] }
                    handleSubmit={ (name) => setQfWinners([...qfWinners, name]) }
                />

            </div>

            <CreateButton
                handleCreate={ handleWinnersSubmit }
                buttonText="Next round..."
            />
        </>
    );
}

export default QuarterFinals;