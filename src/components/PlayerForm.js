import { useState } from "react";

const PlayerForm = () => {

    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);

    const handleChange = (e) => {
        setName(e.currentTarget.value );
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setPlayers([...players, name]);
        setName("");
    }

    return (
        <>
            <div className="card col-md-6 mt-4">
                <form className="card-body form-group">
                    <h4 className="card-title">Add 4 players, one at a time</h4>
                    <div className="form-inline mb-4">
                        <label>Name</label>
                        <input
                            className="form-control ml-4"
                            type="text"
                            placeholder="name"
                            value={ name }
                            onChange={ handleChange }
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={ handleAdd }
                        >Add player
                    </button>
                </form>
            </div>
            
        </>
    )


}

export default PlayerForm;