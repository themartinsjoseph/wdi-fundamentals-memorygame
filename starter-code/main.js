console.log("JS file is connected to HTML! Woo!")

// var cardOne = 'queen'; 
// var cardTwo = 'queen'; 
// var cardThree = 'king';
// var cardFour = 'king';

var gameBoard = document.getElementById('game-board'); 

function createCards() {
	for (var i=0; i<4; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
}

}





/*if (cardFour === cardTwo) {

alert('Sorry, try again.'); 

} else if (cardOne === cardTwo) {

alert('You found a match!')

} else if (cardThree === cardFour) {

alert('You found a match!')

} else if (cardThree === cardOne) {

alert('Sorry, try again.')

} else if (cardThree === cardTwo) {

alert('Sorry, try again.')

} else if (cardFour === cardOne) {

alert('Sorry, try again.')

} 
*/


