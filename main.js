//We need a way to select a random index in array
//Math.random()

//I want an array of domino list items,
//and I will pick one using a random index
// between 0 and the length of the array

//NodeList -> Array.from() -> Array
let dominoElements = document.querySelectorAll("#dominoes-list li")
console.log(dominoElements)


function getRandomNumber (min, max) {
    // Source: https://stackoverflow.com/a/7228322/1034856
    // License: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstIndex = 0
let lastIndex = dominoElements.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex)

let randomDomino = dominoElements[randomIndex]
randomDomino.classList.add("selected")


/* ----- Experiment for another day ----- (learn how to utilize buttons)

.deleted {
    // Completely remove from the document flow! 
    display: none;
}

.hidden {
    // Keep element in the document flow, but make it invisible? 
     visibility: hidden;
}
*/   
