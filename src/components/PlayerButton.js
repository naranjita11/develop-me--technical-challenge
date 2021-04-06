const PlayerButton = ({ name, selected, handleSelect, disableCondition }) => {

    let selectedColour = selected ? "gold" : "#28a745";

    const buttonStyling = {
        fontSize: 1 + "rem",
        color: "white",
        fontWeight: 700,
        backgroundColor: selectedColour,
        border: 0,
    }

    return (
        <button
            className="btn btn-primary"
            onClick={ handleSelect }
            disabled={ disableCondition }
            style={ buttonStyling } 
        >{ name }
        </button>
    );
}

export default PlayerButton;

