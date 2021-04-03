import { useState } from "react";
// import history from "../../history";
import PlayerForm from "../PlayerForm";
import NamesArray from "../NamesArray";
import RandomiseButton from "../RandomiseButton";
import PlayerPairings from "../PlayerPairings";
import CreateButton from "../CreateButton";

const PlayerDisplay = ({ handleSave }) => {

    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [randomisedPlayers, setRandomisedPlayers] = useState([]);

    const handleChangeName = (e) => {
        setName(e.currentTarget.value);
    }

    const handleAddPlayer = (e) => {
        e.preventDefault();
        setPlayers([...players, name]);
        setName("");
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
        handleSave({ randomisedPlayers });
    };

    return (
        
        <>
            <div className="card-deck row">

                <div className="card card-body col-md-6 mb-4">
                    
                    <h4 className="card-title mb-4">Add 4 or 8 player names, one at a time</h4>
                    
                    <PlayerForm
                        label="Name"
                        placeholder="type here!"
                        value={ name }
                        handleChange={ handleChangeName }
                        buttonText="Add player"
                        handleAdd={ handleAddPlayer }
                    />

                    <NamesArray
                        array={ players } 
                    />
                    
                </div>

                <div className="card card-body col-md-6 mb-4">

                    {/* <h4 className="card-title">Your players are...</h4> */}
                    
                    <RandomiseButton
                        arrayLength={ players.length }
                        handleChange={ handleRandomiseArray }  
                        buttonText="Randomly generate starting pairs"
                    />

                    <PlayerPairings
                        array={ randomisedPlayers }
                    />

                </div>
                
            </div>

            
            <CreateButton
                handleCreate={ handleSubmit }
                buttonText="Start Tournament!"
            />
            
        </>
    );

}

export default PlayerDisplay;