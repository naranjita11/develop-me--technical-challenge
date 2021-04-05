const PlayerButton = ({ name, selected, handleSelect }) => {

    let selectedColour = selected ? "hotpink" : "grey";

    return (
        <button
            className="btn btn-primary"
            onClick={ handleSelect }
            style={{ backgroundColor: selectedColour }} 
        >{ name }
        </button>
    );
}

export default PlayerButton;

