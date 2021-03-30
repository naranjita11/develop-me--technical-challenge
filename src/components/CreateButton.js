import { Component } from "react";

class CreateButton extends Component {

    render() {
        return (
            <>
                <button
                    className="centre btn btn-primary"
                    type="submit"
                    onClick={ this.handleCreate }
                >Start Tournament!</button>
            </>
        )
    };

}

export default CreateButton;
    