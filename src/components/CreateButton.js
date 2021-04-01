const CreateButton = ({ handleCreate, buttonText }) => {



    return (
        <>
            <button
                className="btn btn-primary mt-4 center"
                style={{ width: 100 + "%", fontSize: 1.5 + "rem"}}
                type="submit"
                onClick={ handleCreate }
            >{ buttonText }</button>
        </>
    )

}

export default CreateButton;
    