const PlayerPairings = ({ noOfPlayers, array }) => {

    const badgeStylingName = {
        fontSize: 1 + "rem",
        color: "white",
    }

    const badgeStylingVs = {
        fontSize: 1 + "rem",
        color: "white",
        fontWeight: 400,
    }

    return (

        <>
            <div className="mt-4 mb-0 text-center">
                <div>
                    <div>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[0] : "?" }</span>
                        <span style={ badgeStylingVs } className="badge bg-light text-dark">versus</span>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[1] : "?" }</span>
                    </div>
                    <div>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[2] : "?" }</span>
                        <span style={ badgeStylingVs } className="badge bg-light text-dark">versus</span>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[3] : "?" }</span>
                    </div>
                </div>

                { noOfPlayers <= 4 ? null :
                <div>
                    <div>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[4] : "?" }</span>
                        <span style={ badgeStylingVs } className="badge bg-light text-dark">versus</span>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[5] : "?" }</span>
                    </div>
                    <div>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[6] : "?" }</span>
                        <span style={ badgeStylingVs } className="badge bg-light text-dark">versus</span>
                        <span style={ badgeStylingName } className="badge bg-info m-2">{ array.length !== 0 ? array[7] : "?" }</span>
                    </div>
                </div>
                }
            </div>
        </>
    );
}

export default PlayerPairings;