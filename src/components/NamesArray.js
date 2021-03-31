const NamesArray = ({ array }) => {

    return (
        <ul className="list-group mt-4">
            { array.map((value, i) => (
                <li className="list-group-item" key={ i }>{ value }</li>
            )) }
        </ul>
    )

}

export default NamesArray;