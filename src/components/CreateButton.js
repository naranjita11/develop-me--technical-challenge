const CreateButton = ({ handleCreate, buttonText, disableCondition, colour }) => {

    const buttonStyle = {
        width: 100 + "%",
        fontSize: 1.5 + "rem",
        backgroundColor: colour,
        border: 0,
        // marginTop:,
    }

    return (
        <>
            <button
                className="btn center mt-3 mb-3"
                style={ buttonStyle }
                disabled={ disableCondition }
                type="submit"
                onClick={ handleCreate }
            >{ buttonText }</button>
        </>
    )

}

export default CreateButton;
    