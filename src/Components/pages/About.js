//the about page is a page that tells the user more on how to use the game 
//and some background information regarding the game
// importing the container function from reactrap
import React from 'react'
import { Container } from 'reactstrap';

// an about function used to display the content on the page
//Container and Fragment are reactrap functions
function About() {
    return (
        <Container >
            <React.Fragment>
                <div style={aboutStyle} className="Hangman container">
                    <h3>About</h3>
                    <p>This is version of the classic letter guessing game called Hangman. 
                    You are shown a set of blank letters that match a word or phrase and 
                    you have to guess what these letters are to reveal the hidden word. 
                    You guess by picking letters from those displayed on the sides. ... 
                    This is why the game is called 'Hangman'.
                    </p>
                    <br/>
                    <p>To play the Game, you need to select letters of a hidden word. In this case an Animal. Tip is to start with the vowels.
                    You are allowed 7 wrong guesses before you loose. Off course if you get the word right before the seven guesses are up, You Win!

                    </p>    
                    </div>
        </React.Fragment>
        </Container>
    )
}
//created a styling variable to keep the styling of the page on the same coding page
const aboutStyle = {
    color: '#b9cfdf',
    textDecoration: 'none',
    textAlign: 'center',
    border: '1px solid #81a2b8',
    borderRadius: '15px',
    marginTop: '50px'
 
   
}
//export the about page
export default About;