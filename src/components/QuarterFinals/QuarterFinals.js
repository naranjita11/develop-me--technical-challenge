import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const QuarterFinals = ({ array }) => {

    const [winner1, setWinner1] = useState("");
    const [winner2, setWinner2] = useState("");
    const [winner3, setWinner3] = useState("");
    const [winner4, setWinner4] = useState("");
    const [qfWinners, setQfWinners] = useState([]);

    const handleWinnersSubmit = (e) => {
        e.preventDefault();
        setQfWinners([winner1, winner2, winner3, winner4]);
        // handleSave({ qfWinners });
    };

    return (
        <>
            <div className="mt-4 text-center">
                <h4>Click who wins!</h4>
                <GamePairs
                    name1={ array[0] }
                    name2={ array[1] }
                    handleSubmit={ (name) => setWinner1(name) }
                />
                <GamePairs
                    name1={ array[2] }
                    name2={ array[3] }
                    handleSubmit={ (name) => setWinner2(name) }
                />
                <GamePairs
                    name1={ array[4] }
                    name2={ array[5] }
                    handleSubmit={ (name) => setWinner3(name) }
                />
                <GamePairs
                    name1={ array[6] }
                    name2={ array[7] }
                    handleSubmit={ (name) => setWinner4(name) }
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