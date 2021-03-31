import { useState } from "react";

import PlayerForm from "../components/PlayerForm";
import NamesArray from "../components/NamesArray";
import RandomiseButton from "../components/RandomiseButton";
import PlayerPairings from "../components/PlayerPairings";

const PlayerDisplay = () => {

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

    return (
        <div className="card-deck row mb-4">

            <div className="card card-body col-md-6 mt-4">
                
                <h4 className="card-title">Add 4 or 8 player names, one at a time</h4>
                
                <PlayerForm
                    label="Name"
                    placeholder="name"
                    value={ name }
                    handleChange={ handleChangeName }
                    buttonText="Add player"
                    handleAdd={ handleAddPlayer }
                />

                <NamesArray
                    array={ players } 
                />

                {/* <ul className="list-group mt-4">
                    { players.map((value, i) => (
                        <li className="list-group-item" key={ i }>{ value }</li>
                    )) }
                </ul> */}
                
            </div>

            <div className="card card-body col-md-6 mt-4">
                
                <RandomiseButton
                    arrayLength={ players.length }
                    handleChange={ handleRandomiseArray }  
                    buttonText="Generate random pairings"
                />

                <PlayerPairings
                    array={ randomisedPlayers }
                />

            </div>
            
        </div>
    );

}

export default PlayerDisplay;