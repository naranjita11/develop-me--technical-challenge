import { Component } from "react";

class Header extends Component {

    render() {
      // let {  } = this.props;

      return (
        <header
          className="jumbotron mt-4 mb-4 text-center"
          // style={{ backgroundColor: "cornflowerblue" }} 
        >
          <h1>Table Tennis Tournament</h1>
        </header> 
      )
    }

}

export default Header;