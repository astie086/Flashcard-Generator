

//Start Game

function flashcards () {

    // creating begining options
        inquirer.prompt([
            {
                type: "list",
                name: "userType",
                message: "What would you like to do?",
                choices: ["basic-quiz", "cloze-quiz", "quit"]
            }
    // to take you to the different options
        ]).then(function(choice) {
     
            if (choice.userType === "basic-quiz") {
                //was trying to call the functions for the game
                BasicCard;
            } else if (choice.userType === "cloze-quiz") {
                //was trying to call the functions for the game
                clozeCard;
            } else if (choice.userType === "quit") {
                console.log("Thanks for playing!");
            }
        });
    }
   
  
    
   
   
   
   
   
   
   
   
   
   