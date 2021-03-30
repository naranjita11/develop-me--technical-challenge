import { Component } from "react";

class PlayerDisplay extends Component {

    render() {
        return (
            <>
                <div className="card card-body col-md-6 mt-4">
                    <h4 className="card-title">The players are:</h4>
                    <p className="card-body">Harry, Killian, Bob, Jack</p>
                </div>
                
            </>
        )
    }


}

export default PlayerDisplay;