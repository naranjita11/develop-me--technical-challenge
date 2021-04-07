import { useState } from "react";
import PlayerForm from "../PlayerForm";
import NamesArray from "../NamesArray";
import RandomiseButton from "../RandomiseButton";
import PlayerPairings from "../PlayerPairings";
import CreateButton from "../CreateButton";

const PlayerDisplay = ({ handleSave, handleSaveQF }) => {

    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [message, setMessage] = useState("Names need to be between 2 and 16 letters long.");
    const [randomisedPlayers, setRandomisedPlayers] = useState([]);

    const handleChangeName = (e) => {
        setName(e.currentTarget.value);
    }

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if (players.includes(name)) {
            setMessage("Each name needs to be unique!");
        }

        else {
            setPlayers([...players, name]);
            setName("");
            setMessage("Names need to be between 2 and 16 letters long.");
        }
    }

    const randomise = (array) => {

        for (let i = array.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;   
    }

    const handleRandomiseArray = (e) => {
        e.preventDefault();
        const copyiedArr = [...players ];
        setRandomisedPlayers(randomise(copyiedArr));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (randomisedPlayers.length === 4) {
            handleSaveQF(randomisedPlayers);
        }

        else handleSave(randomisedPlayers);
    };

    return (
        
        <div className="mb-4">
            <div className="card-deck row">

                <div className="card card-body mb-4" style={{backgroundColor: "#56A981"}}>
                    
                    <h4 className="card-title mb-4" style={{ color: "white" }}>Add 4 or 8 player names, one at a time</h4>
                    
                    <PlayerForm
                        label="Name"
                        placeholder="type here!"
                        value={ name }
                        handleChange={ handleChangeName }
                        validationMessage={ message }
                        buttonText="Add player"
                        handleAdd={ handleAddPlayer }
                        disableConditions={ name.length < 2 || players.length >= 8 }
                    />

                    <NamesArray
                        array={ players } 
                    />
                    
                </div>

                <div className="card card-body mb-4" style={{backgroundColor: "#56A981"}}>
                    
                    <RandomiseButton
                        arrayLength={ players.length }
                        handleChange={ handleRandomiseArray }  
                        buttonText="Randomly generate starting pairs"
                    />

                    <PlayerPairings
                        noOfPlayers={ players.length }
                        array={ randomisedPlayers }
                    />

                </div>
                
            </div>

            
            <CreateButton
                disableCondition={ randomisedPlayers.length === 0 }
                colour="#edea87"
                handleCreate={ handleSubmit }
                buttonText="Start Tournament!"
            />
            
        </div>
    );

}

export default PlayerDisplay;