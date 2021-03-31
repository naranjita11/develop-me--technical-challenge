const PlayerForm = ({ label, placeholder, value, handleChange, handleAdd, buttonText }) => {

    return (
        <>
            <form className="form-group">
                <div className="form-inline mb-4">
                    <label>{ label }</label>
                    <input
                        className="form-control ml-4"
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