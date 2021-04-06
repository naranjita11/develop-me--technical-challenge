const PlayerPairings = ({ array }) => {

    const badgeStyling = {
        fontSize: 1 + "rem",
    }

    return (
        <div className="mt-4 mb-0 text-center">
            <div>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[0] : "?" }</span>
                <span style={ badgeStyling } className="badge bg-light text-dark">versus</span>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[1] : "?" }</span><br />

                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[2] : "?" }</span>
                <span style={ badgeStyling } className="badge bg-light text-dark">versus</span>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[3] : "?" }</span>
            </div>

            <div>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[4] : "?" }</span>
                <span style={ badgeStyling } className="badge bg-light text-dark">versus</span>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[5] : "?" }</span><br />

                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[6] : "?" }</span>
                <span style={ badgeStyling } className="badge bg-light text-dark">versus</span>
                <span style={ badgeStyling } className="badge bg-info text-dark m-2">{ array.length !== 0 ? array[7] : "?" }</span>
            </div>
        </div>
        
    );
}

export default PlayerPairings;