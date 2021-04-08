const NamesArray = ({ array }) => {

    const badgeStylingName = {
        fontSize: 1 + "rem",
        color: "white",
        backgroundColor: "#ebb2cb"
    }

    return (
        <>
            <div className="mt-2">
                { array.map((value, i) => (
                    <span className="badge m-2" style={ badgeStylingName } key={ i }>{ value }</span>
                )) }
            </div>
        </>
    )

}

export default NamesArray;