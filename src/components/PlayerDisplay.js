import { useState } from "react";
import PlayerForm from "../components/PlayerForm";

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

            <PlayerForm
                value={ name }
                handleChange={ handleChangeName }
                handleAdd={ handleAddPlayer }
            />

            <div className="card card-body col-md-6 mt-4">
                <h4 className="card-title">The contenders are:</h4>
                <ul className="list-group mt-4">
                { players.map((name, i) => (
                    <li className="list-group-item" key={ i }>{ name }</li>
                )) }
                </ul>

                <button
                    className="btn btn-primary"
                    onClick={ handleRandomise }
                    >Generate random pairings
                </button>
            </div>
            
        </div>
    );

}

export default PlayerDisplay;