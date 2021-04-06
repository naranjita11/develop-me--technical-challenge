const PlayerButton = ({ name, selected, handleSelect, disableCondition }) => {

    let selectedColour = selected ? "hotpink" : "grey";

    return (
        <button
            className="btn btn-primary"
            onClick={ handleSelect }
            disabled={ disableCondition }
            style={{ backgroundColor: selectedColour }} 
        >{ name }
        </button>
    );
}

export default PlayerButton;

