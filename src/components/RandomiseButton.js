const RandomiseButton = ({ arrayLength, handleChange, buttonText }) => {

    return (
        <>
            <button
                disabled={ !(arrayLength % 4 === 0 && arrayLength > 0) }
                className="btn btn-success"
                onClick={ handleChange }
                >{ buttonText }
            </button>
        </>
    )

}

export default RandomiseButton;
    