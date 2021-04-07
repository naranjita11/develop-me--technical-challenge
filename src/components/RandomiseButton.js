const RandomiseButton = ({ arrayLength, handleChange, buttonText }) => {

    return (
        <>
            <button
                disabled={ !(arrayLength % 4 === 0 && arrayLength > 0) }
                className="btn"
                style={{backgroundColor: "#ebb2cb", color: "white"}}
                onClick={ handleChange }
                >{ buttonText }
            </button>
        </>
    )

}

export default RandomiseButton;
    