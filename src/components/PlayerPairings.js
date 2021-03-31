const PlayerPairings = ({ array }) => {

    return (
        <div>
            <ul className="list-group mt-4">
                    { array.map((value, i) => (
                        <li className="list-group-item" key={ i }>{ value }</li>
                    )) }
            </ul>
        </div>
        
    );
}

export default PlayerPairings;