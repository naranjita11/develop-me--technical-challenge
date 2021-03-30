import { Component } from "react";

class PlayerForm extends Component {

    render() {
        return (
            <>
                <div className="card col-md-6 mt-4">
                    <form className="card-body form-group">
                        <h4 className="card-title">Add a player</h4>
                        <div className="form-inline mb-4">
                            <label >Name</label>
                            <input
                                className="form-control ml-4"
                                type="text"
                                placeholder="Harry"
                                value={ this.Name }
                                onChange={ this.handleChangeName }
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={ this.handleAdd }
                            >Add player
                        </button>
                    </form>
                </div>
                
            </>
        )
    }


}

export default PlayerForm;