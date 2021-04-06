const PlayerForm = ({ label, placeholder, value, handleChange, validationMessage, disableConditions, handleAdd, buttonText }) => {

    return (
        <>
            <form className="form-group">
                <div className="form-inline">
                    <label className="mr-2 mb-2">{ label }</label>
                    <input
                        className="form-control mb-2"
                        type="text"
                        minLength="2"
                        maxLength="16"
                        placeholder={ placeholder }
                        value={ value }
                        onChange={ handleChange }
                    />
                </div>
                <p className="form-text text-muted">
                    { validationMessage }
                </p>

                <button
                    className="btn btn-primary"
                    disabled={ disableConditions }
                    onClick={ handleAdd }
                    >{ buttonText }
                </button>
            </form>     
        </>
    )


}

export default PlayerForm;