// import { useState } from "react";
import GamePairs from "../GamePairs";
import CreateButton from "../CreateButton";

const SemiAndFinals = ({ array }) => {

    // const [roundWinners, setRoundWinners] = useState([]);



    return (

        <div className="card-deck row">

            <div className="card card-body col-md-6 mb-4">
            
                <div className="mt-4 text-center">
                    <h4>Click who wins the semi-finals!</h4>
                    <GamePairs />
                    <GamePairs />
                </div>

            </div>

            <div className="card card-body col-md-6 mb-4">
            
                <div className="mt-4 text-center">
                    <h4>Click who wins the final!</h4>
                    <GamePairs />

                </div>

            </div>

            <CreateButton 
                // handleCreate={ handleSubmit }
                buttonText="Submit winner!"    
            />

        </div>
        
    );
}

export default SemiAndFinals;