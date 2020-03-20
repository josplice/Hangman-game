//importing all the neccessary functions and classes 
// importing 7 images for the hangman picture frame

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { randomWord } from './Words.js';
import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';
import step7 from './images/7.jpg';


//creating the hangman class
class Hangman extends Component {
//the images and the amount of wrong answers are static variables and the state of them will not change    
    static defaultProps = {
        maxWrong: 7,
        images: [step0, step1, step2, step3, step4, step5, step6, step7 ]
    }
//create variable and state using the constructor function
    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        }
    }
// the input of the user gets captured using the e.target.value 
//parameter and are checked if the letter is in the word by changing the variable state
    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st =>({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }));
    }
//using the split and map functions to show the spaceholders of the random word in the parameter letter
    guessWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : "_ "));
    }
//creating the keypad of the game using split and map
//the buttons are styled inline
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button class ='btn btn-light m-1'
                key = {letter}
                value = {letter}
                onClick = {this.handleGuess}
                disabled = {this.state.guessed.has(letter)}
                >
                {letter}
            </button>
        ));
    }
//the way to reset the game is to load an empty array and to access a random word from the word.js  component
    resetButton = () => {
        this.setState({
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()

        })
    }
//within the render function the gameStat is determided which carries the win or loose state of game
//if mistakes is grater tan maxwrong(7) then the game is lost
//updating the state of the game to winner if the geussed word matches the answer
    render() {
        const gameOver = this.state.mistake>= this.props.maxWrong;
        let gameStat = this.generateButtons();
        const isWinner = this.guessWord().join("") === this.state.answer

        if (isWinner) {
            gameStat ="You Won!!"
        }

        if (gameOver) {
            gameStat = "You Lost"
        }
//UI information like image and word placeholders and keypad printed on screen
//the function guessword is being called 
//gamestat is a function called to generate the buttons of keypad
        return (
            <Container>
                
                <Row>
                
                    <Col style={colomStyle} >
                    <React.Fragment>
                        <div>
                            <img src={this.props.images[this.state.mistake]} alt="" style={{padding: '20px'}}/>
                        </div> 
                        <div classname="box2">Guesses: {this.state.mistake} of { this.props.maxWrong}</div>
                            <br/>
                            <p>Guess the animal?</p>
                            <p >
                                {!gameOver ? this.guessWord() : this.state.answer}
                            </p>
                            <p >{gameStat}</p>
                        <button className='btn btn-light' style={buttonStyle} onClick={this.resetButton}>Reset</button>
                        </React.Fragment>
                    </Col>
                </Row>
               
            </Container>
        )
    }
}
//styling is done on the same page as the function and elements
const colomStyle = {
    border: '1px solid #81a2b8',
    borderRadius: '15px',
    marginTop: '30px',
    textAlign: 'center'
}
const buttonStyle = {
    backgroundColor: '#b9cfdf',
    marginBottom: '30px'

}
export default Hangman
