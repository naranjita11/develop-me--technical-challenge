const PlayerForm = ({ label, placeholder, value, handleChange, handleAdd, buttonText, array }) => {

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

                <ul className="list-group mt-4">
                    { array.map((value, i) => (
                        <li className="list-group-item" key={ i }>{ value }</li>
                    )) }
                </ul>
            </form>     
        </>
    )


}

export default PlayerForm;