import { Component } from "react";

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            players: [],
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleAdd(e) {
        e.preventDefault();
        this.setState({
            name: "",
            // use of spread notation to create new array with existing array. Creates a new array rather than mutates the old one
            players: [...this.state.players, this.state.name],
        });
    }


    render() {
        return (
            <>
                <div className="card col-md-6 mt-4">
                    <form className="card-body form-group">
                        <h4 className="card-title">Add 4 players, one at a time</h4>
                        <div className="form-inline mb-4">
                            <label>Name</label>
                            <input
                                className="form-control ml-4"
                                type="text"
                                // placeholder="Harry"
                                value={ this.name }
                                onChange={ this.handleChange }
                            />
                        </div>
                        <button
                            className="btn btn-primary"
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