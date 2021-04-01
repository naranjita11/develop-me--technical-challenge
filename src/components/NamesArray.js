const NamesArray = ({ array }) => {

    return (
        <>
            {/* <ul className="list-group mt-4">
                { array.map((value, i) => (
                    <li className="list-group-item" key={ i }>{ value }</li>
                )) }
            </ul> */}

            <div className="mt-2">
                { array.map((value, i) => (
                    <span className="badge bg-info text-dark m-2" style={{ fontSize: 1 + "rem" }} key={ i }>{ value }</span>
                )) }
            </div>
        </>
    )

}

export default NamesArray;