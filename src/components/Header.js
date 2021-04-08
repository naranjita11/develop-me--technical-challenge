import { Component } from "react";

class Header extends Component {

    render() {
      // let {  } = this.props;

      return (
        <header
          className="jumbotron text-center titleJumbo"
          style={{ backgroundColor: "#99d1a3", color: "white" }} 
        >
          <h1>Table Tennis Tournament</h1>
        </header> 
      )
    }

}

export default Header;