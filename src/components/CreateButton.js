const CreateButton = ({ handleCreate, buttonText, disableCondition }) => {



    return (
        <>
            <button
                className="btn btn-primary mt-4 mb-4 center"
                style={{ width: 100 + "%", fontSize: 1.5 + "rem"}}
                disabled={ disableCondition }
                type="submit"
                onClick={ handleCreate }
            >{ buttonText }</button>
        </>
    )

}

export default CreateButton;
    