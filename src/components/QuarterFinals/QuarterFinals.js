import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const QuarterFinals = ({ array, handleSave }) => {

    const [winner1, setWinner1] = useState("");
    const [winner2, setWinner2] = useState("");
    const [winner3, setWinner3] = useState("");
    const [winner4, setWinner4] = useState("");
    const [message, setMessage] = useState("");

    const handleWinnersSubmit = (e) => {
        e.preventDefault();
        if (winner1 === "" || winner2 === "" || winner3 === "" || winner4 === "") {
            setMessage("Select a winner from each pair!");
        }

        else handleSave([winner1, winner2, winner3, winner4]);
    };

    return (
        <>
            <div className="card card-body mb-0 text-center" style={{backgroundColor: "#56A981" }}>
                <h4 className="card-title mb-4" style={{color: "white"}}>Click who wins each game!</h4>
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
                    handleSubmit={ (name) => setWinner4(name)}
                />

                <CreateButton
                    handleCreate={ handleWinnersSubmit }
                    colour={ "#99d1a3" }
                    buttonText="Next round..."
                />
                <p className="mt-2" style={{color: "white"}}>{ message }</p>  

            </div>

            
        </>
    );
}

export default QuarterFinals;