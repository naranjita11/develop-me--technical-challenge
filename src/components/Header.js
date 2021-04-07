import { Component } from "react";

class Header extends Component {

    render() {
      // let {  } = this.props;

      return (
        <header
          className="jumbotron mt-4 text-center"
          style={{ backgroundColor: "#99d1a3", color: "white" }} 
        >
          <h1><strong>Table Tennis Tournament</strong></h1>
        </header> 
      )
    }

}

export default Header;