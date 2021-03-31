import { useState } from "react";
import PlayerForm from "../components/PlayerForm";
import PlayerPairings from "../components/PlayerPairings";

const PlayerDisplay = () => {

    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);

    const handleChangeName = (e) => {
        setName(e.currentTarget.value );
    }

    const handleAddPlayer = (e) => {
        e.preventDefault();
        setPlayers([...players, name]);
        setName("");
    }
    const randomise = (array) => {

        for (let i = array.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i];array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleRandomise = (e) => {
        randomise(players);
        console.log(players);
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
                    array={ players } 
                />
                
            </div>

            <div className="card card-body col-md-6 mt-4">
                <button
                    disabled={ !(players.length % 4 === 0 && players.length > 0) }
                    className="btn btn-success"
                    onClick={ handleRandomise }
                    >Generate random pairings
                </button>

                <PlayerPairings
                    // array={ players }
                />

            </div>
            
        </div>
    );

}

export default PlayerDisplay;