const NamesArray = ({ array }) => {

    const badgeStylingName = {
        fontSize: 1 + "rem",
        color: "white",
        backgroundColor: "#ebb2cb"
    }

    return (
        <>
            {/* <ul className="list-group mt-4">
                { array.map((value, i) => (
                    <li className="list-group-item" key={ i }>{ value }</li>
                )) }
            </ul> */}

            <div className="mt-2">
                { array.map((value, i) => (
                    <span className="badge m-2" style={ badgeStylingName } key={ i }>{ value }</span>
                )) }
            </div>
        </>
    )

}

export default NamesArray;