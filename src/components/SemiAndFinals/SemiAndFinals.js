import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const SemiAndFinals = ({ array, handleSaveSF, handleSaveF }) => {

    const [winner1, setWinner1] = useState("");
    const [winner2, setWinner2] = useState("");
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);
    const [finalists, setFinalists] = useState(["?", "?"]);
    const [winner, setWinner] = useState("");

    const handleWinnersSubmit = (e) => {
        e.preventDefault();

        if (winner1 === "" || winner2 === "") {
            setMessage("Select a winner from each pair!");
        }

        else {
            setFinalists([winner1, winner2]);
            handleSaveSF([winner1, winner2]);
            setClicked(true);
        }

    };

    const handleWinnerSubmit = (e) => {
        e.preventDefault();
        handleSaveF(winner);
    };

    return (

        <div className="card-deck row">

            <div className="card card-body col-md-6 mb-4">
            
                <div className="mt-4 text-center">
                    <h4>Click who wins the semi-finals!</h4>
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
                </div>

                <CreateButton
                disableCondition={ clicked }
                handleCreate={ handleWinnersSubmit }
                buttonText="Next round..."
                />

                <p>{ message }</p>

            </div>

            <div className="card card-body col-md-6 mb-4">
            
                <div className="mt-4 text-center">
                    <h4>Click who wins the final!</h4>
                    <GamePairs
                        name1={ finalists[0] }
                        name2={ finalists[1] }
                        handleSubmit={ (name) => setWinner(name) }
                    />

                </div>

                <CreateButton
                disableCondition={ winner === "" }
                handleCreate={ handleWinnerSubmit }
                buttonText="Submit winner!"    
                />

            </div>

        </div>
    );
}

export default SemiAndFinals;