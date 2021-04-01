import { Component } from "react";

class CreateButton extends Component {

    render() {
        return (
            <>
                <button
                    className="btn btn-primary mt-4 center"
                    style={{ width: 100 + "%", fontSize: 1.5 + "rem"}}
                    type="submit"
                    onClick={ this.handleCreate }
                >Start Tournament!</button>
            </>
        )
    };

}

export default CreateButton;
    