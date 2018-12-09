class Phrase {
	constructor(phrase){
		this.phrase = game.getRandomPhrase()
	}

	/*
		the addPhraseToDisplay Method takes the random phrase selected, and adds it to the display
	*/

	addPhraseToDisplay(){
		
		const arr = this.phrase.split("");
		const ul = document.createElement('ul')
		const location = document.getElementById('phrase').appendChild(ul);
		const li = document.createElement('li');
			for(let i = 0; i < this.phrase.length; i++){
					
				if(this.phrase[i].match(/\s/)){
					li.className = 'hide space'
				} else if(this.phrase[i].match(/[a-z]/)){
					li.className = 'hide letter ' + this.phrase[i];
					li.innerHTML = this.phrase[i] 
				}
					
					ul.appendChild(li)
				}
	}

	/*
		The checkLetter Method checks to see if the selected letter matches a letter in the phrase
	*/
		
	checkLetter() {
		let choice = event.target.innerText;
		for (let letter of this.phrase) {
		    if (choice === letter) {
		      return true;
		      }
		}
		    return false;
	}


		/*
			The showMatchedLetter Method reveals the letter(s) on the board that matches the selected letter
		*/


	showMatchedLetter(){
		
		const letter = document.getElementById('phrase').firstElementChild.children;
		let guess = event.target.innerText;

			for(let i = 0; i < letter.length; i++){
				let check = letter[i].innerText;
				if(guess === check) {
				letter[i].className ='show'
			}
		}
	}
}

