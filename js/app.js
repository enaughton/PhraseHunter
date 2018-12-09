	
	/*
		The resetDisplay Function hides the overlay
	*/
	function resetDisplay(){
		document.getElementById('overlay').style.display = 'none'
	}

	/*
		The markButton Function calls the handleInteraction Method then 
		disables the button that was clicked
	*/
	function markButton(event){
		game.handleInteraction(event)
		event.target.disabled = true
	}


	// This EventListener calls for a new game object, and also starts the game

	document.getElementById('btn__reset').addEventListener('click', () => {
		resetDisplay();
		game = new Game();
		game.startGame();
	});


	// This EventListener calls the markButton Function if the event target is equal to Button
	document.getElementById('qwerty').addEventListener('click', (event) =>{

		if(event.target.tagName === 'BUTTON'){
			markButton(event);
		}
	})




		
		
			



	












