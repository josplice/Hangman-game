import React from 'react'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';


//the header contains two links for the home page and about page
//the links are routed on the main app.js file
function Header() {
    return(
        <Container>
            <React.Fragment>
            <header style={headerStyle} >
               <h2>Hangman</h2>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
            </React.Fragment>
        </Container>
    )
}
//styling of the header and the 2 links in the header
const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#81a2b8',
    padding: '10px',
    borderRadius: '15px',
    color: 'rgb(185, 207, 223)',
    marginTop: '20px'
}
const linkStyle = {
    color: '#b9cfdf',
    textDecoration: 'none',
    textAlign: 'center'
}
export default Header;