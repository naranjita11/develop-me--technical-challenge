import logo from '../assets/titleLogo.png';

const Header = () => {

      return (
        <header
          className="jumbotron text-center titleJumbo"
          style={{ backgroundColor: "#99d1a3", color: "white" }} 
        >
          <img className="titleLogo" src={logo} alt="table tennis logo" />
          <h1>Table Tennis Tournament</h1>
        </header> 
      );
}

export default Header;