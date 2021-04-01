const PlayerForm = ({ label, placeholder, value, handleChange, handleAdd, buttonText }) => {

    return (
        <>
            <form className="form-group">
                <div className="form-inline mb-4">
                    <label className="mr-2 mb-2">{ label }</label>
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder={ placeholder }
                        value={ value }
                        onChange={ handleChange }
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={ handleAdd }
                    >{ buttonText }
                </button>
            </form>     
        </>
    )


}

export default PlayerForm;