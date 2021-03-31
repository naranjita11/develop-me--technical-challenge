const PlayerForm = ({ value, handleChange, handleAdd }) => {

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
                            value={ value }
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