//creating an array of random words
var mainWords = [
    "snake",
    "elephant",
    "tiger",
    "lion",
    "monkey",
    "grizleybear",
    "impala",
    "gorilla",
    "giraffe",
    "rhinoceros",
    "zebra",
    "wildebeest",
    "aardvark",
    "penquin",
    "hippopotamus",
    "crocodile",
    "wolverine"

]
//// returns a random integer from 0 to 9
function randomWord() {
    return mainWords[Math.floor(Math.random() * mainWords.length)]
}

export { randomWord }