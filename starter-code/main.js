console.log("JS file is connected to HTML! Woo!")

// var
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board'); 

//functions 
function createCards() {
	for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);


    gameBoard.appendChild(cardElement);
    gameBoard.appendChild(cardElement);

}

}

function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src="kinghearts.png" alt="King of Hearts">"; // king
    } else {
        this.innerHTML = "<img src="queenhearts.png" alt="Queen of Hearts">"; // queen
    }

if (cardsInPlay.length === 2) {
   isMatch(cardsInPlay);
   cardsInPlay = [] ;
}

}

function isMatch () {
if (cards[0] === cards[1]) {
   alert('You found a match!');
  } else if (cards[2] === cards[3]) {
      alert('You found a match!');
     } else if {
       alert('Sorry, try again.');
  } 
  console.log(createCards);
} 

}






