class Game {
	constructor(){
		this.missed = 0;
		this.phrases = ['piece of cake', 'donut worry', 'pie in the sky', 'who ate my cookies']
	
	}

	/*
		The getRandomPhrase Method randomly retrieves one of the phrases stored in the phrases array.
	*/
	getRandomPhrase(){

		game.phrases
		const number = Math.floor(Math.random() * 4);
		const randomPhrase = this.phrases[number];
		const source = this.phrases[number].source;

		return randomPhrase
	}

	/* 	
		The handleInteraction Method checks to see if the button clicked by the player matches a letter in the phrase.
		If not, then it calls the removeLife method.
		If matches, it calls the showMatchedLetter
		method on the phrase and then calls the checkForWin method.
	*/

    handleInteraction() {

		if (this.phrase.checkLetter(event)) {
	    	event.target.setAttribute('class', 'chosen')
	    	this.phrase.showMatchedLetter(event);
	    	this.checkForWin();
	    } else {
	      	event.target.setAttribute('class', 'wrong');
	      	this.removeLife();
		}
	}


	/*
		The removeLife Method removes a life, removes a heart from the board, 
		and, if the player is out of lives, ends the game.
	*/
		
	removeLife(){

		const tries = document.getElementsByClassName('tries');
		const lives = document.querySelectorAll('img')
		
			
		this.missed += 1 

		if(this.missed === 5){
			this.gameOver('lose')
		} else {
			for(let i = 0; i < this.missed; i++){
				lives[i].src="../oop/images/lostHeart.png"
			}
		}
	}

		/* 
			The checkForWin Method checks to see if all the letters in the phrase are selected
		*/

		checkForWin(){

			const letter = document.getElementById('phrase').firstElementChild.children
			let correct = 0

			for(let i = 0; i < letter.length; i++){

				if(letter.className === 'show'){
					correct += 0
				}
				else if(letter.className === 'hide space'){
					correct += 0
				}
 
				else{
					correct -= 1
				}
			}

			if(correct === 0 ){
				this.gameOver('win')
			}
		}

	/*
		The gameOver Method displays a message if the player wins 
	*/

	gameOver(message){ 
	
	  document.getElementById('overlay').style.display='flex';
		if(message === 'win'){
		document.getElementById('game-over-message').innerText = 'Congratulations! Refresh to play again';
      	document.getElementById('btn__reset').style.display = 'none';
		} else {
			document.getElementById('game-over-message').innerText = "GAME OVER! To Try Again Refresh The Page"
			document.getElementById('btn__reset').style.display = 'none'
		}
	}

	/*
		The startGame Method creates a new phrase object, and adds the phrase to the display. 
	*/

	startGame(){
		this.phrase = new Phrase(this.getRandomPhrase());		
		this.phrase.addPhraseToDisplay()
		
	}
}

	






