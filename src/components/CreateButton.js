const CreateButton = ({ handleCreate, buttonText, disableCondition }) => {



    return (
        <>
            <button
                className="btn btn-primary mb-0 center"
                style={{ width: 100 + "%", fontSize: 1.5 + "rem"}}
                disabled={ disableCondition }
                type="submit"
                onClick={ handleCreate }
            >{ buttonText }</button>
        </>
    )

}

export default CreateButton;
    