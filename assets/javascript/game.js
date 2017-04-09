
	//Create up variable wins, losses, tries.
	//Create up empty array userInput and options with all the string letters.
	
	var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var tries = 9;
	var userInput = [];	

	//User press keybaord letter, make string and lower case.

	document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("userguess: " +userguess);

	//computer generated random letter usring method Math.random().
	
	var computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log("computer guess: " + computerGuess);

	//compare computer generated random letter and user intered letter
	//if user wins,increase win count.
	
     if (userguess === computerGuess) {
		 	tries = 9; 
            wins++
            console.log("Wins: " + wins);
            document.getElementById("wins").innerHTML = wins;
    
    //push userguess value to userInput array
    		userInput.push(userguess);
            console.log("full array " + userInput.join(","));

    //Join userInput array values with ",". after win, remove all userInput
    //values. 
            var myInput = (userInput.join(","));
        	document.getElementById("myInput").innerHTML = myInput;
            userInput = [];
	}
	
	//If userguess and computer guess are not same, try 9 times.  
	else if (userguess !== computerGuess) {
		if (tries > 0)  {
               console.log(tries);
               document.getElementById("tries").innerHTML = tries;
           
            // Calculate # of guesses left.    
               tries--;
               console.log(tries);
            
            //push userguess value to userInput array
                userInput.push(userguess);
        		
            //Join userInput array values with ",". after win, remove all userInput
    		//values.
        		console.log("full array " + userInput.join(","));
        		var myInput = (userInput.join(","));
        		document.getElementById("myInput").innerHTML = myInput;
        } 

    //if user unable to guess after 9 tries - increase loss and restart game
    //without refresh
    
        else if (tries === 0) {
                tries = 9;
                losses++;
 				console.log("Loses: " + losses);
 				document.getElementById("losses").innerHTML = losses;
 				userInput = [];
 		}    
    }
                 
	}


